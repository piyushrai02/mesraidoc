import { useRouter } from 'next/router'
import { Logo } from './components/Logo'
import { Footer } from './components/Footer'
import { NavbarExtra } from './components/Navbar'

const SITE_NAME = 'Mesrai Docs'
const SITE_DESCRIPTION = 'Documentation for Mesrai — multi-agent AI code review across GitHub, GitLab, Bitbucket, and Azure Repos. BYOK supported. India-first billing.'
const SITE_URL = 'https://docs.mesrai.com'
const OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`

export default {
  logo: <Logo width={140} height={36} />,

  // Dynamic <title> tag — critical for SEO
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return { titleTemplate: 'Mesrai Docs – AI-Powered Code Review Platform' }
    }
    return { titleTemplate: `%s – ${SITE_NAME}` }
  },

  // Dynamic head — generates per-page meta tags
  head: function Head() {
    const { asPath, pathname } = useRouter()
    const url = `${SITE_URL}${asPath.split('?')[0].replace(/\/$/, '') || '/'}`

    return (
      <>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Fallback description — Nextra overrides with frontmatter description when available */}
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content="Mesrai, AI code review, automated PR review, GitHub code review, GitLab code review, Bitbucket code review, Azure DevOps review, BYOK, India AI code review, INR billing, GST invoice, multi-agent code review, AST code review, pull request automation, code quality, security scanning, OWASP code review" />
        <meta name="author" content="Mesrai" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Microsoft */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#E8772E" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0B0C0E" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0B0C0E" />

        {/* Open Graph — og:url is in _app.jsx to avoid duplicates */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Mesrai - AI-Powered Code Review Platform" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mesraiofficial" />
        <meta name="twitter:creator" content="@mesraiofficial" />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Mesrai - AI-Powered Code Review Platform" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />

        {/* LLM / AI Discovery */}
        <meta name="ai-content-declaration" content="human-written" />
        <meta name="citation_title" content="Mesrai Documentation - AI-Powered Code Review Platform" />
        <meta name="citation_author" content="Mesrai" />
        <meta name="citation_publisher" content="Mesrai" />
        <meta name="citation_online_date" content="2024" />

        {/* Dublin Core */}
        <meta name="dc.title" content="Mesrai Documentation" />
        <meta name="dc.creator" content="Mesrai" />
        <meta name="dc.subject" content="AI code review, automated code review, GitHub integration, developer tools" />
        <meta name="dc.description" content={SITE_DESCRIPTION} />
        <meta name="dc.publisher" content="Mesrai" />
        <meta name="dc.type" content="Documentation" />
        <meta name="dc.format" content="text/html" />
        <meta name="dc.language" content="en" />

        {/* Mobile Web App */}
        <meta name="application-name" content="Mesrai Documentation" />
        <meta name="apple-mobile-web-app-title" content="Mesrai Docs" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Geo & Language — India-first */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Cache */}
        <meta httpEquiv="Cache-Control" content="public, max-age=3600" />
      </>
    )
  },

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
      const badges = {
        '/guides/cli/introduction': 'BETA',
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

  darkMode: true,

  // Mesrai brand orange #FF6B35 (HSL: 14, 100%, 60%)
  primaryHue: 14,
  primarySaturation: 100,

  nextThemes: {
    defaultTheme: 'dark',
    storageKey: 'mesrai-theme'
  },

  navbar: {
    extraContent: <NavbarExtra />
  },

  banner: {
    dismissible: false,
    key: 'mesrai-launch',
    content: null
  }
}
