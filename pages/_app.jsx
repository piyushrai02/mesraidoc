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
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mesrai",
  "url": "https://docs.mesrai.com",
  "logo": "https://docs.mesrai.com/android-chrome-512x512.png",
  "description": "AI code review platform that catches bugs, security risks, and design issues on every pull request. Multi-agent reviewer over GitHub, GitLab, Bitbucket, and Azure Repos.",
  "foundingDate": "2025",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "info@mesrai.com",
    "areaServed": ["IN", "Worldwide"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://twitter.com/mesraiofficial",
    "https://linkedin.com/company/mesrai",
    "https://github.com/mesraiofficial"
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
      "name": "Free",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free forever for individuals — 3 active devs, unlimited BYOK PR reviews"
    },
    {
      "@type": "Offer",
      "name": "Pro (BYOK)",
      "price": "499",
      "priceCurrency": "INR",
      "description": "Per active developer per month, unlimited PR reviews",
      "billingIncrement": "P1M"
    },
    {
      "@type": "Offer",
      "name": "Pro (AI Included)",
      "price": "999",
      "priceCurrency": "INR",
      "description": "Per active developer per month, 150 AI Included PR reviews / dev / month",
      "billingIncrement": "P1M"
    }
  ],
  "featureList": [
    "Multi-agent AI code review on every pull request",
    "Architecture-aware reviews over AST graph",
    "BYOK — OpenAI, Anthropic, Vertex, Bedrock, OpenAI-compatible endpoints",
    "GitHub, GitLab, Bitbucket, Azure Repos integrations",
    "Mesrai Rules — plain English or YAML",
    "Cockpit engineering metrics dashboard",
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
