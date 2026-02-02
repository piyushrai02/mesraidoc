/**
 * JSON-LD Structured Data Component for SEO
 * Provides rich snippets for search engines
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mesrai",
    "url": "https://docs.mesrai.com",
    "logo": "https://docs.mesrai.com/logo.png",
    "description": "AI-powered code review platform that helps engineering teams ship code 3x faster with intelligent automation and GitHub integration.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@mesrai.com"
    },
    "sameAs": [
      "https://twitter.com/mesraiofficial",
      "https://linkedin.com/company/mesrai",
      "https://github.com/mesraiofficial"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mesrai",
    "applicationCategory": "DeveloperApplication",
    "description": "AI-powered code review platform that helps engineering teams ship code 3x faster with intelligent automation and GitHub integration.",
    "url": "https://docs.mesrai.com",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier available with paid plans"
    },
    "featureList": [
      "AI-powered code reviews",
      "GitHub integration",
      "Team collaboration",
      "Organization management",
      "Real-time notifications",
      "Custom review rules",
      "Performance analytics"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://docs.mesrai.com${item.path}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, datePublished, dateModified, author, image }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author || "Mesrai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mesrai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://docs.mesrai.com/logo.png"
      }
    },
    "image": image || "https://docs.mesrai.com/og-image.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mesrai Documentation",
    "url": "https://docs.mesrai.com",
    "description": "Complete documentation for Mesrai - AI-powered code review platform",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Mesrai"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://docs.mesrai.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Technical documentation schema for better LLM/AI discovery
export function TechArticleSchema({ title, description, datePublished, dateModified, keywords = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": "en-US",
    "author": {
      "@type": "Organization",
      "name": "Mesrai",
      "url": "https://docs.mesrai.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mesrai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://docs.mesrai.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://docs.mesrai.com"
    },
    "keywords": keywords.length > 0 ? keywords : [
      "AI code review",
      "automated code review",
      "GitHub integration",
      "code quality",
      "developer tools"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "GitHub account"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo schema for step-by-step guides
export function HowToSchema({ title, description, steps, totalTime }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "totalTime": totalTime || "PT10M",
    "tool": {
      "@type": "HowToTool",
      "name": "GitHub Account"
    },
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url || `https://docs.mesrai.com#step-${index + 1}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Speakable schema for voice search and LLM optimization
export function SpeakableSchema({ cssSelectors = ["h1", "h2", "h3", "article p:first-of-type"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelectors
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Software documentation schema for better categorization
export function SoftwareSourceCodeSchema({ name, codeRepository, programmingLanguage, runtimePlatform }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "name": name || "Mesrai Integration",
    "codeRepository": codeRepository || "https://github.com/mesraiofficial",
    "programmingLanguage": programmingLanguage || ["JavaScript", "TypeScript", "Python"],
    "runtimePlatform": runtimePlatform || "Node.js",
    "author": {
      "@type": "Organization",
      "name": "Mesrai"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
