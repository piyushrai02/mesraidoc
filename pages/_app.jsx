import '../styles/globals.css'
import '../styles/custom.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  OrganizationSchema,
  ProductSchema,
  WebSiteSchema,
  BreadcrumbSchema,
  ArticleSchema,
  TechArticleSchema,
  SpeakableSchema
} from '../components/seo/JsonLd'
import { Analytics } from '@vercel/analytics/react'

const BASE_URL = 'https://docs.mesrai.com'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const isBlogPost = router.pathname.startsWith('/blog/')
  const isDocPage = !isHomePage && !isBlogPost

  // Generate canonical URL (remove trailing slashes and query params)
  const canonicalPath = router.asPath.split('?')[0].replace(/\/$/, '') || '/'
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  // Generate dynamic breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    // Skip breadcrumbs on home page
    if (isHomePage) return []

    const pathSegments = router.asPath.split('?')[0].split('/').filter(Boolean)

    // Always start with Home as first breadcrumb item (Google requirement)
    const breadcrumbs = [{ name: 'Home', path: '/' }]

    pathSegments.forEach((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`
      // Convert slug to readable title (simple capitalization)
      const name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())

      breadcrumbs.push({ name, path })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <>
      <Head>
        {/* Dynamic Canonical URL - Critical for SEO */}
        <link rel="canonical" href={canonicalUrl} key="canonical" />

        {/* Dynamic Open Graph URL */}
        <meta property="og:url" content={canonicalUrl} key="og:url" />
      </Head>

      {/* JSON-LD Structured Data - Must be outside Head for proper rendering */}
      <OrganizationSchema />
      <WebSiteSchema />
      <SpeakableSchema />

      {/* Page Specific Structured Data */}
      {isHomePage && <ProductSchema />}

      {breadcrumbs.length > 0 && <BreadcrumbSchema items={breadcrumbs} />}

      {/* TechArticle Schema for Documentation Pages */}
      {isDocPage && pageProps.frontMatter && (
        <TechArticleSchema
          title={pageProps.frontMatter.title}
          description={pageProps.frontMatter.description}
          datePublished={pageProps.frontMatter.date || new Date().toISOString()}
          dateModified={pageProps.frontMatter.lastModified}
          keywords={pageProps.frontMatter.keywords}
        />
      )}

      {/* Article Schema for Blog Posts */}
      {isBlogPost && pageProps.frontMatter && (
        <ArticleSchema
          title={pageProps.frontMatter.title}
          description={pageProps.frontMatter.description}
          datePublished={pageProps.frontMatter.date}
          author={pageProps.frontMatter.author}
        />
      )}

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
