import React, { useEffect } from "react";

/**

 * Dynamically updates document.title, meta tags, and <link rel="canonical"> in <head>
 */
const SEO = ({
  title = "ISMR B-School Pune | Best MBA, BBA & BCA College in Pune",
  description = "ISMR B-School Pune is a premier management institute offering AICTE approved & SPPU affiliated MBA, BBA and BCA programs with 100% placement assistance.",
  keywords = "ISMR Pune, MBA College in Pune, BBA College in Pune, BCA College in Pune, Best B-School in Pune, Top MBA Placements",
  canonical = "",
  ogImage = "https://ismrpune.edu.in/ISMR%20logo_page-0001.png"
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update / Create Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Update / Create Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // 4. Update / Create Canonical Tag (Dynamic fallback if not explicitly passed)
    let currentPath = "";
    if (typeof window !== "undefined") {
      currentPath = window.location.pathname;
    }
    const targetCanonical = canonical || (currentPath && currentPath !== "/" ? `https://ismrpune.edu.in${currentPath}` : "https://ismrpune.edu.in/");

    if (targetCanonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", targetCanonical);
    }

    // 5. Update / Create OpenGraph & Twitter Meta Tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: targetCanonical },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
