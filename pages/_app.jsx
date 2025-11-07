import '../styles/globals.css'
import '../styles/custom.css'
import Head from 'next/head'
import { OrganizationSchema, ProductSchema, WebSiteSchema } from '../components/seo/JsonLd'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global JSON-LD Structured Data */}
        <OrganizationSchema />
        <ProductSchema />
        <WebSiteSchema />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
