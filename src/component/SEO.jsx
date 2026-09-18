import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seoRoutes from "../seoRoutes.json";

/**
 * Custom Hook: useSEO
 * 
 * Synchronizes document.title, <title>, <meta name="description">,
 * <meta name="keywords">, <link rel="canonical">, Open Graph tags, and Twitter cards.
 *
 * @param {Object} options
 * @param {string} [options.title] - Optional override for page title.
 * @param {string} [options.description] - Optional override for meta description.
 * @param {string} [options.keywords] - Optional override for meta keywords.
 * @param {string} [options.canonical] - Optional override for canonical URL.
 * @param {string} [options.ogImage] - Optional override for social share image.
 *
 * Usage:
 * 1. Automatic route-based SEO (zero-config, uses seoRoutes.json):
 *    useSEO();
 * 
 * 2. Dynamic page-level overrides (e.g. blog posts, product pages):
 *    useSEO({ title: "Custom Article Title", description: "..." });
 */
export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://ismrpune.edu.in/ISMR%20logo_page-0001.png"
} = {}) {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location?.pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
    const cleanPath = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "").toLowerCase();

    // Look up route in seoRoutes.json
    const routeMeta =
      seoRoutes[cleanPath] ||
      seoRoutes[rawPath] ||
      seoRoutes[rawPath.replace(/\/+$/, "")];

    // Priority: Explicit override -> seoRoutes.json configuration -> Fallback default
    const activeTitle =
      title ||
      routeMeta?.title ||
      "Best MBA College in Pune | Top B-School Ranking & Placements - ISMR";

    const activeDescription =
      description ||
      routeMeta?.description ||
      "Looking for the best MBA college in Pune? ISMR offers top-ranked MBA programs with 100% placement support, excellent corporate connections, and world-class faculty. Apply now!";

    const activeKeywords =
      keywords ||
      routeMeta?.keywords ||
      "Best MBA College in Pune, top mba colleges in pune, MBA admission Pune, management institute in pune";

    const activeCanonical =
      canonical ||
      routeMeta?.canonical ||
      (cleanPath === "/" ? "https://ismrpune.edu.in/" : `https://ismrpune.edu.in${cleanPath}`);

    const activeOgImage = ogImage || routeMeta?.ogImage || "https://ismrpune.edu.in/ISMR%20logo_page-0001.png";

    // 1. Update Title in document and in <title> DOM element
    if (activeTitle) {
      document.title = activeTitle;
      let titleTag = document.querySelector("title");
      if (!titleTag) {
        titleTag = document.createElement("title");
        document.head.appendChild(titleTag);
      }
      titleTag.innerText = activeTitle;
    }

    // 2. Update / Create Meta Description
    if (activeDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", activeDescription);
    }

    // 3. Update / Create Meta Keywords
    if (activeKeywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", activeKeywords);
    }

    // 4. Update / Create Canonical Tag
    if (activeCanonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", activeCanonical);
    }

    // 5. Update / Create OpenGraph Meta Tags
    const ogTags = [
      { property: "og:title", content: activeTitle },
      { property: "og:description", content: activeDescription },
      { property: "og:url", content: activeCanonical },
      { property: "og:image", content: activeOgImage },
      { property: "og:type", content: "website" }
    ];

    ogTags.forEach(({ property, content }) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // 6. Update / Create Twitter Meta Tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: activeTitle },
      { name: "twitter:description", content: activeDescription },
      { name: "twitter:image", content: activeOgImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

  }, [location.pathname, title, description, keywords, canonical, ogImage]);
}

/**
 * SEO Component Wrapper
 * Wraps useSEO for JSX declarative usage:
 * <SEO /> or <SEO title="..." description="..." />
 */
const SEO = (props) => {
  useSEO(props);
  return null;
};

export default SEO;
