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
}

const webSiteSchema = {
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
