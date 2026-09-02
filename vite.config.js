import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CANONICAL_MAP = {
  // Home
  '/': 'https://ismrpune.edu.in/',

  // 1-7: Course Degree Pages (No trailing slash as specified)
  '/programs/mba-in-marketing-management-in-pune': 'https://ismrpune.edu.in/programs/mba-in-marketing-management-in-pune',
  '/programs/mba-hr-college-in-pune': 'https://ismrpune.edu.in/programs/mba-hr-college-in-pune',
  '/programs/mba-in-finance-management-in-pune': 'https://ismrpune.edu.in/programs/mba-in-finance-management-in-pune',
  '/programs/mba-in-business-analytics-pune': 'https://ismrpune.edu.in/programs/mba-in-business-analytics-pune',
  '/programs/mba-in-pharma-healthcare-management-in-pune': 'https://ismrpune.edu.in/programs/mba-in-pharma-healthcare-management-in-pune',
  '/programs/mba-in-operations-and-supply-chain-management-in-pune': 'https://ismrpune.edu.in/programs/mba-in-operations-and-supply-chain-management-in-pune',
  '/programs/mba-in-agribusiness-management-pune': 'https://ismrpune.edu.in/programs/mba-in-agribusiness-management-pune',
  '/programs/bba-college-in-pune': 'https://ismrpune.edu.in/programs/bba-college-in-pune',
  '/programs/bca-college-in-pune': 'https://ismrpune.edu.in/programs/bca-college-in-pune',

  // 8-14: About Us Section (With trailing slash as specified)
  '/about-us': 'https://ismrpune.edu.in/about-us/',
  '/about-us/AboutUs': 'https://ismrpune.edu.in/about-us/',
  '/about-us/leadership-team': 'https://ismrpune.edu.in/about-us/leadership-team/',
  '/about-us/Leadership': 'https://ismrpune.edu.in/about-us/leadership-team/',
  '/about-us/leadership-team/chairman-message': 'https://ismrpune.edu.in/about-us/leadership-team/chairman-message/',
  '/about-us/leadership-team/Chairman': 'https://ismrpune.edu.in/about-us/leadership-team/chairman-message/',
  '/about-us/leadership-team/secretary-message': 'https://ismrpune.edu.in/about-us/leadership-team/secretary-message/',
  '/about-us/leadership-team/Secretary': 'https://ismrpune.edu.in/about-us/leadership-team/secretary-message/',
  '/about-us/leadership-team/treasurer-message': 'https://ismrpune.edu.in/about-us/leadership-team/treasurer-message/',
  '/about-us/leadership-team/Treasure': 'https://ismrpune.edu.in/about-us/leadership-team/treasurer-message/',
  '/about-us/leadership-team/director-message': 'https://ismrpune.edu.in/about-us/leadership-team/director-message/',
  '/about-us/why-ismr': 'https://ismrpune.edu.in/about-us/why-ismr/',
  '/about-us/WhyIsmr': 'https://ismrpune.edu.in/about-us/why-ismr/',
  '/about-us/awards-and-rankings': 'https://ismrpune.edu.in/about-us/awards-and-rankings/',
  '/about-us/AwardsAndRankings': 'https://ismrpune.edu.in/about-us/awards-and-rankings/',

  // 15-23: Admissions Section (With trailing slash as specified)
  '/admissions/eligibility-criteria': 'https://ismrpune.edu.in/admissions/eligibility-criteria/',
  '/admissions/EligibilityCriteria': 'https://ismrpune.edu.in/admissions/eligibility-criteria/',
  '/admissions/how-to-apply': 'https://ismrpune.edu.in/admissions/how-to-apply/',
  '/admissions/HowToApplyPage': 'https://ismrpune.edu.in/admissions/how-to-apply/',
  '/admissions/education-loan': 'https://ismrpune.edu.in/admissions/education-loan/',
  '/admissions/EducationLoan': 'https://ismrpune.edu.in/admissions/education-loan/',
  '/admissions/refund-policy': 'https://ismrpune.edu.in/admissions/refund-policy/',
  '/admissions/RefundPolicy': 'https://ismrpune.edu.in/admissions/refund-policy/',
  '/admissions/contact': 'https://ismrpune.edu.in/admissions/contact/',
  '/admissions/AdmissionContact': 'https://ismrpune.edu.in/admissions/contact/',
  '/admissions/disclaimer': 'https://ismrpune.edu.in/admissions/disclaimer/',
  '/admissions/AdmissionDisclaimer': 'https://ismrpune.edu.in/admissions/disclaimer/',
  '/admissions/fee-disclaimer': 'https://ismrpune.edu.in/admissions/fee-disclaimer/',
  '/admissions/FeeDisclaimer': 'https://ismrpune.edu.in/admissions/fee-disclaimer/',
  '/admissions/fee-structure': 'https://ismrpune.edu.in/admissions/fee-structure/',
  '/admissions/FeeStructure': 'https://ismrpune.edu.in/admissions/fee-structure/',
  '/admissions/required-documents': 'https://ismrpune.edu.in/admissions/required-documents/',
  '/admissions/RequiredDocuments': 'https://ismrpune.edu.in/admissions/required-documents/',
  '/admissions/more-faqs': 'https://ismrpune.edu.in/admissions/more-faqs/',
  '/admissions/faq-bba-bca': 'https://ismrpune.edu.in/admissions/more-faqs/',

  // 24-25: Academics Section (With trailing slash as specified)
  '/academics/programs-offered': 'https://ismrpune.edu.in/academics/programs-offered/',
  '/academics/ProgramsOffered': 'https://ismrpune.edu.in/academics/programs-offered/',
  '/academics/programs': 'https://ismrpune.edu.in/academics/programs/',
  '/academics/course-duration': 'https://ismrpune.edu.in/academics/programs/',
  '/academics/CourseDuration': 'https://ismrpune.edu.in/academics/programs/',

  // 26-29: Placement Section
  '/placements': 'https://ismrpune.edu.in/placements/',
  '/placements/PlacementsOverview': 'https://ismrpune.edu.in/placements/',
  '/placements/rules-and-regulations': 'https://ismrpune.edu.in/placements/rules-and-regulations',
  '/placements/PlacementRules': 'https://ismrpune.edu.in/placements/rules-and-regulations',
  '/placements/process': 'https://ismrpune.edu.in/placements/process/',
  '/placements/PlacementProcess': 'https://ismrpune.edu.in/placements/process/',
  '/placements/internships-and-placements': 'https://ismrpune.edu.in/placements/internships-and-placements/',
  '/placements/InternshipsAndPlacements': 'https://ismrpune.edu.in/placements/internships-and-placements/',
  '/placements/corporate-partners': 'https://ismrpune.edu.in/placements/internships-and-placements/',

  // 30-32: Life @ Campus (With trailing slash as specified)
  '/campus-life/student-life': 'https://ismrpune.edu.in/campus-life/student-life/',
  '/campus-life/StudentLifePage': 'https://ismrpune.edu.in/campus-life/student-life/',
  '/campus-life/student-facilities': 'https://ismrpune.edu.in/campus-life/student-facilities/',
  '/campus-life/newsletter': 'https://ismrpune.edu.in/campus-life/newsletter/',
  '/campus-life/CampusNewsletter': 'https://ismrpune.edu.in/campus-life/newsletter/',

  // 33: Reach Us (With trailing slash as specified)
  '/contact-us': 'https://ismrpune.edu.in/contact-us/',

  // NAAC & Legal
  '/naac': 'https://ismrpune.edu.in/naac/',
  '/terms-and-conditions': 'https://ismrpune.edu.in/terms-and-conditions'
};

function dynamicCanonicalPlugin() {
  return {
    name: 'dynamic-canonical-plugin',
    transformIndexHtml(html, { originalUrl, path }) {
      const reqUrl = originalUrl || path || '/';
      const cleanPath = reqUrl.split('?')[0].split('#')[0];
      // Normalize by removing trailing slash for lookup
      const lookupPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');

      // Lookup exact canonical URL from map, or generate cleanly
      let canonicalUrl = CANONICAL_MAP[lookupPath] || CANONICAL_MAP[cleanPath];
      if (!canonicalUrl) {
        if (cleanPath && cleanPath !== '/' && cleanPath !== '/index.html') {
          const normalized = cleanPath.replace(/^\/+/, '');
          canonicalUrl = `https://ismrpune.edu.in/${normalized}`;
        } else {
          canonicalUrl = 'https://ismrpune.edu.in/';
        }
      }

      // Replace <link rel="canonical" ... /> in raw HTML served to View Page Source
      let updatedHtml = html.replace(
        /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );

      // Replace <meta property="og:url" ... /> in raw HTML
      updatedHtml = updatedHtml.replace(
        /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );

      return updatedHtml;
    }
  };
}

function faviconPlugin() {
  return {
    name: 'favicon-no-cache-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url === '/favicon.ico' || req.url.startsWith('/favicon.ico') || req.url === '/favicon.png' || req.url.startsWith('/favicon.png'))) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dynamicCanonicalPlugin(), faviconPlugin()],
  build: {
    sourcemap: true
  }
})
