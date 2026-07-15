import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/mintlify-components.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '../mdx-components'

const BASE_URL = 'https://docs.mesrai.com'

// JSON-LD Schema Data
// Canonical Mesrai Organization schema. Matches the same `@id`
// emitted on mesrai.com, app.mesrai.com, and marketplace.mesrai.com
// so Google's Knowledge Graph merges all 4 properties into one
// entity. Update here = update lockstep in portfolio/lib/seo.ts,
// mesrai-marketplace/lib/seo.ts, and mesrai-engine/apps/web layout.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://mesrai.com/#organization",
  "name": "Mesrai",
  "alternateName": "Mesrai AI",
  "legalName": "Mesrai Technologies",
  "url": "https://mesrai.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://mesrai.com/logo.png",
    "width": "512",
    "height": "512"
  },
  "image": "https://mesrai.com/og-image.png",
  "description": "Multi-agent AI code review for product engineering teams. India-first, BYOK supported, INR + GST billing.",
  "foundingDate": "2025-01",
  "founders": [
    { "@type": "Person", "name": "Kajal Rai", "jobTitle": "Co-founder" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "email": "contact@mesrai.com",
      "contactType": "customer support",
      "areaServed": ["IN", "Worldwide"],
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "email": "contact@mesrai.com",
      "contactType": "sales",
      "areaServed": ["IN", "Worldwide"],
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://mesrai.com",
    "https://app.mesrai.com",
    "https://docs.mesrai.com",
    "https://marketplace.mesrai.com",
    "https://github.com/mesraiofficial",
    "https://www.linkedin.com/company/mesrai",
    "https://x.com/mesraiofficial",
    "https://www.youtube.com/@mesrai",
    "https://www.instagram.com/mesraiofficial",
    "https://www.wikidata.org/wiki/Q140030324"
  ],
  // Wikidata entity binding — see canonical Org schema in
  // portfolio/src/lib/seo.ts for full rationale.
  "identifier": [
    {
      "@type": "PropertyValue",
      "propertyID": "Wikidata",
      "value": "Q140030324"
    }
  ]
}

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mesrai Documentation",
  "url": "https://docs.mesrai.com",
  "description": "Documentation for Mesrai — multi-agent AI code review platform across GitHub, GitLab, Bitbucket, and Azure Repos. BYOK supported. INR billing.",
  "inLanguage": "en-IN",
  "publisher": {
    "@type": "Organization",
    "name": "Mesrai"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://docs.mesrai.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mesrai",
  "applicationCategory": "DeveloperApplication",
  "description": "AI code review platform that catches bugs, security risks, and design issues on every pull request. Multi-agent reviewer over GitHub, GitLab, Bitbucket, and Azure Repos.",
  "url": "https://docs.mesrai.com",
  "operatingSystem": "Web",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Trial",
      "price": "0",
      "priceCurrency": "INR",
      "description": "14-day Free Trial — every feature unlocked, connect your own AI key (BYOK), no credit card"
    },
    {
      "@type": "Offer",
      "name": "Pro (BYOK)",
      "price": "499",
      "priceCurrency": "INR",
      "description": "Per active developer per month, unlimited PR reviews",
      "billingIncrement": "P1M"
    }
  ],
  "featureList": [
    "Multi-agent AI code review on every pull request",
    "Architecture-aware reviews over AST graph",
    "BYOK — OpenAI, Anthropic, Vertex, Bedrock, OpenAI-compatible endpoints",
    "GitHub, GitLab, Bitbucket, Azure Repos integrations",
    "Mesrai Playbook — plain English or YAML",
    "Pulse engineering metrics dashboard",
    "Business Logic Validation against Jira / Linear / docs",
    "Indian data residency option (Enterprise)",
    "SSO/SAML, RBAC, audit logs (Enterprise)"
  ]
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const isBlogPost = router.pathname.startsWith('/blog/')

  // Generate canonical URL (remove trailing slashes and query params)
  const canonicalPath = router.asPath.split('?')[0].replace(/\/$/, '') || '/'
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  // Generate dynamic breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    if (isHomePage) return null

    const pathSegments = router.asPath.split('?')[0].split('/').filter(Boolean)
    const items = [{ name: 'Home', path: '/' }]

    pathSegments.forEach((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`
      const name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
      items.push({ name, path })
    })

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://docs.mesrai.com${item.path}`
      }))
    }
  }

  const breadcrumbSchema = generateBreadcrumbs()

  const mdxComponents = useMDXComponents({})

  return (
    <>
      <Head>
        {/* Dynamic Canonical URL */}
        <link rel="canonical" href={canonicalUrl} key="canonical" />

        {/* Dynamic Open Graph URL */}
        <meta property="og:url" content={canonicalUrl} key="og:url" />

        {/* Organization Schema - Always present */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          key="organization-schema"
        />

        {/* WebSite Schema - Always present */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
          key="website-schema"
        />

        {/* Product Schema - Only on homepage */}
        {isHomePage && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            key="product-schema"
          />
        )}

        {/* Breadcrumb Schema - On all pages except homepage */}
        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            key="breadcrumb-schema"
          />
        )}
      </Head>

      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
      <Analytics />
    </>
  )
}
