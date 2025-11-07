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
      "https://twitter.com/mesrai",
      "https://linkedin.com/company/mesrai",
      "https://github.com/mesrai"
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250"
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
    "publisher": {
      "@type": "Organization",
      "name": "Mesrai"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://docs.mesrai.com/search?q={search_term_string}",
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
