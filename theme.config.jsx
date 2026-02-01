import { Logo } from './components/Logo'
import { Footer } from './components/Footer'
import { NavbarExtra } from './components/Navbar'

export default {
  logo: <Logo width={140} height={36} />,

  head: (
    <>
      {/* Viewport and Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Complete documentation for Mesrai - AI-powered code review platform. Learn to integrate GitHub, manage teams, automate reviews, and ship code 3x faster." />
      <meta name="keywords" content="Mesrai, AI code review, automated code review, GitHub integration, code quality, continuous integration, pull request review, developer tools, team collaboration, code analysis, security scanning, performance optimization" />
      <meta name="author" content="Mesrai" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

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
      <meta name="msapplication-TileColor" content="#6366F1" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0B0C0E" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0B0C0E" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mesrai Documentation - AI-Powered Code Review Platform" />
      <meta property="og:description" content="Complete documentation for Mesrai. Learn to automate code reviews, integrate with GitHub, and ship code 3x faster with AI-powered insights." />
      <meta property="og:site_name" content="Mesrai Documentation" />
      <meta property="og:url" content="https://docs.mesrai.com" />
      <meta property="og:image" content="https://docs.mesrai.com/og-image.png" />
      <meta property="og:image:alt" content="Mesrai - AI-Powered Code Review Platform" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mesrai" />
      <meta name="twitter:creator" content="@mesrai" />
      <meta name="twitter:title" content="Mesrai Documentation - AI-Powered Code Review Platform" />
      <meta name="twitter:description" content="Complete documentation for Mesrai. Learn to automate code reviews, integrate with GitHub, and ship code 3x faster with AI-powered insights." />
      <meta name="twitter:image" content="https://docs.mesrai.com/og-image.png" />
      <meta name="twitter:image:alt" content="Mesrai - AI-Powered Code Review Platform" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href="https://docs.mesrai.com" />
    </>
  ),

  search: {
    placeholder: 'Search docs... ⌘K',
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
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
    titleComponent({ title, type, route }) {
      // Custom badge rendering for NEW/BETA items
      const badges = {
        '/features/architectural-analysis': 'NEW',
        '/integrations/bitbucket': 'BETA',
      };
      const badge = badges[route];

      if (badge) {
        return (
          <span className="flex items-center gap-2">
            {title}
            <span className={`sidebar-badge-${badge.toLowerCase()}`}>{badge}</span>
          </span>
        );
      }

      return title;
    }
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

  // Theme configuration - Indigo primary color
  primaryHue: 239,
  primarySaturation: 84,

  // Next Themes configuration
  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'mesrai-theme'
  },

  // Better navbar
  navbar: {
    extraContent: <NavbarExtra />
  },

  // Banner for announcements
  banner: {
    dismissible: true,
    key: 'mesrai-v2-banner',
    content: (
      <a href="/features/architectural-analysis" className="flex items-center justify-center gap-2 text-sm">
        🎉 <span>Architectural Analysis v2.0 is now available!</span>
        <span className="font-medium underline">Learn more →</span>
      </a>
    )
  }
}
