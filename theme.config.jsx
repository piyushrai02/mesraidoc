import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 6 L12 18 M6 12 L18 12" stroke="currentColor" strokeWidth="2"/>
    </svg>
    <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Mesrai</span>
  </div>
)

export default {
  logo,
  project: {
    link: 'https://github.com/mesrai',
  },
  docsRepositoryBase: 'https://github.com/mesrai/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mesrai Documentation'
    }
  },
  head: () => (
    <>
      <meta property="og:title" content="Mesrai Documentation" />
      <meta property="og:description" content="AI-powered code review platform for modern engineering teams" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mesrai" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  ),
  banner: {
    key: 'mesrai-launch',
    text: '🚀 Ship Code 3x Faster with AI-Powered Reviews. Start Free Trial →'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    title: 'On This Page',
    backToTop: true
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  navigation: {
    prev: true,
    next: true
  },
  footer: {
    text: '© 2025 Mesrai. All rights reserved.'
  },
  primaryHue: 210,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  }
}