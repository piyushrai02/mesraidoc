import { Logo } from './components/Logo'
import { Footer } from './components/Footer'
import { NavbarExtra } from './components/Navbar'

export default {
  logo: <Logo width={140} height={36} />,

  head: (
    <>
      {/* Viewport and Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Mesrai Documentation - AI-powered development platform for modern applications" />
      <meta name="keywords" content="Mesrai, AI, development, platform, documentation, API, integration" />
      <meta name="author" content="Mesrai" />

      {/* Favicon Links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Microsoft Tiles */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#3b82f6" />

      {/* Theme Color */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mesrai Documentation" />
      <meta property="og:description" content="AI-powered development platform for modern applications" />
      <meta property="og:site_name" content="Mesrai Docs" />
      <meta property="og:url" content="https://docs.mesrai.com" />
      <meta property="og:image" content="https://docs.mesrai.com/android-chrome-512x512.png" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mesrai" />
      <meta name="twitter:title" content="Mesrai Documentation" />
      <meta name="twitter:description" content="AI-powered development platform for modern applications" />
      <meta name="twitter:image" content="https://docs.mesrai.com/android-chrome-512x512.png" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href="https://docs.mesrai.com" />
    </>
  ),

  search: {
    placeholder: 'Search documentation...',
  },

  project: {},
  docsRepositoryBase: false,

  editLink: {
    component: null,
  },

  feedback: {
    content: null,
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },

  toc: {
    title: 'On This Page',
    backToTop: true,
    float: true
  },

  navigation: {
    prev: true,
    next: true
  },

  footer: {
    component: <Footer />
  },

  // Enable dark mode toggle
  darkMode: true,

  // Theme configuration
  primaryHue: 210,
  primarySaturation: 100,

  // Next Themes configuration
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'mesrai-theme'
  },

  // Better navbar
  navbar: {
    extraContent: <NavbarExtra />
  },

  // Banner (optional - can be used for announcements)
  banner: {
    dismissible: true,
    key: 'mesrai-banner'
  }
}
