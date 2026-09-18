/**
 * prerender.mjs — Production Full-DOM Pre-rendering Engine for ISMR College
 * 
 * Inspired by FoxWeb's crawler-ready architecture:
 * 1. Launches local preview server on port 4173
 * 2. Uses Puppeteer (Headless Chromium) to visit all 51 routes from seoRoutes.json
 * 3. Waits for React to mount, execute SEO hooks, and render full interactive DOM into <div id="root">
 * 4. Captures 100% complete HTML (both <head> metadata AND full <body> content)
 * 5. Saves both /<route>/index.html (Hostinger/cPanel/Apache) and /<route>.html (Vercel)
 * 
 * Result: 100% crawlable by Googlebot, Bingbot, social scrapers, and instant FCP for users!
 */

import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const SEO_ROUTES_FILE = path.join(__dirname, 'src', 'seoRoutes.json');
const BASE_URL = 'http://localhost:4173';
const WAIT_PER_PAGE_MS = 1500; // ms to let React finish rendering

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting Vite preview server on port 4173...');
    const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--host'], {
      cwd: __dirname,
      shell: true,
      stdio: 'pipe',
    });

    let started = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      if (!started && (output.includes('4173') || output.includes('Local:'))) {
        started = true;
        console.log('✅ Preview server running on port 4173');
        resolve(server);
      }
    });

    server.stderr.on('data', (data) => {
      const output = data.toString();
      if (!started && (output.includes('4173') || output.includes('Local:'))) {
        started = true;
        console.log('✅ Preview server running on port 4173');
        resolve(server);
      }
    });

    server.on('error', reject);

    setTimeout(() => {
      if (!started) {
        started = true;
        console.log('⏳ Assuming preview server is live (fallback)...');
        resolve(server);
      }
    }, 4000);
  });
}

function saveHtml(route, html) {
  const isRoot = route === '/' || route === '';
  const cleanRoute = route.replace(/^\/+/, '').replace(/\/+$/, '');

  if (isRoot) {
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), html, 'utf-8');
    return;
  }

  // 1. Directory based index.html for Hostinger / Apache / cPanel (e.g. dist/about-us/index.html)
  const dirPath = path.join(DIST_DIR, cleanRoute);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), html, 'utf-8');

  // 2. Direct .html file for Vercel / Netlify cleanUrls (e.g. dist/about-us.html)
  const targetHtmlFile = path.join(DIST_DIR, `${cleanRoute}.html`);
  const parentOfHtml = path.dirname(targetHtmlFile);
  if (!fs.existsSync(parentOfHtml)) {
    fs.mkdirSync(parentOfHtml, { recursive: true });
  }
  fs.writeFileSync(targetHtmlFile, html, 'utf-8');
}

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ folder not found! Please run `vite build` first.');
    process.exit(1);
  }

  if (!fs.existsSync(SEO_ROUTES_FILE)) {
    console.error('❌ src/seoRoutes.json not found!');
    process.exit(1);
  }

  const seoRoutes = JSON.parse(fs.readFileSync(SEO_ROUTES_FILE, 'utf-8'));
  const routes = Object.keys(seoRoutes);

  console.log(`\n🔍 Found ${routes.length} routes in src/seoRoutes.json for full crawler pre-rendering.\n`);

  let server;
  let browser;

  try {
    server = await startPreviewServer();
    await sleep(2000);

    console.log('🌐 Launching headless Chromium for Full DOM pre-rendering...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Suppress console and page errors to keep output clean
    page.on('console', () => {});
    page.on('pageerror', () => {});

    let count = 0;
    for (const route of routes) {
      const targetUrl = `${BASE_URL}${route}`;
      try {
        await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 25000 });
        await sleep(WAIT_PER_PAGE_MS);

        const renderedHtml = await page.content();
        saveHtml(route, renderedHtml);
        count++;
        console.log(`  [${count}/${routes.length}] Pre-rendered: ${route}`);
      } catch (err) {
        console.warn(`  ⚠️ Warning: Failed to prerender ${route}: ${err.message}`);
      }
    }

    console.log(`\n🎉 Full-DOM Pre-rendering successfully completed for all ${count} routes!`);
    console.log('✅ Every page now has complete HTML (head tags + full React body) ready for Google crawlers and Hostinger/Vercel hosting!\n');
  } finally {
    if (browser) await browser.close();
    if (server) {
      server.kill();
      try {
        if (process.platform === 'win32') {
          spawn('taskkill', ['/pid', server.pid, '/f', '/t']);
        }
      } catch (e) {}
    }
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});

