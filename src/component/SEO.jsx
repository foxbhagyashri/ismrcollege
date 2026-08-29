import React, { useEffect } from "react";

/**

 * Dynamically updates document.title, meta tags, and <link rel="canonical"> in <head>
 */
const SEO = ({
  title = "ISMR B-School Pune | Best MBA, BBA & BCA College in Pune",
  description = "ISMR B-School Pune is a premier management institute offering AICTE approved & SPPU affiliated MBA, BBA and BCA programs with 100% placement assistance.",
  keywords = "ISMR Pune, MBA College in Pune, BBA College in Pune, BCA College in Pune, Best B-School in Pune, Top MBA Placements",
  canonical = "https://ismrpune.edu.in/",
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

    // 4. Update / Create Canonical Tag
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // 5. Update / Create OpenGraph Tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
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

  }, [title, description, keywords, canonical, ogImage]);

  return null;
};

export default SEO;
