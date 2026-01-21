
const meta = {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden'
  },
  docs: {
    title: 'Documentation',
    type: 'page',
    display: 'hidden' // Hide from navbar, but its children will be linked via menus
  },
  products: {
    title: 'Products',
    type: 'menu',
    items: {
      features: {
        title: 'Features',
        href: '/docs/features'
      },
      'ai-review': {
        title: 'AI Review',
        href: '/docs/ai-review'
      },
      integrations: {
        title: 'Integrations',
        href: '/docs/integrations'
      },
      performance: {
        title: 'Performance',
        href: '/docs/performance'
      }
    }
  },
  blog: {
    title: 'Blog',
    type: 'page'
  },
  about: {
    title: 'About',
    type: 'page',
    href: 'https://mesrai.com/about',
    newWindow: true
  },
  pricing: { // Mapped to docs/billing or a separate page. For now let's link to docs/billing
    title: 'Pricing',
    type: 'page',
    href: '/docs/billing'
  },
  resources: {
    title: 'Resources',
    type: 'menu',
    items: {
      introduction: {
        title: 'Introduction',
        href: '/docs/introduction'
      },
      setup: {
        title: 'Setup',
        href: '/docs/setup'
      },
      'api-reference': {
        title: 'API Reference',
        href: '/docs/api-reference'
      },
      faq: {
        title: 'FAQ',
        href: '/docs/faq'
      },
      roadmap: {
        title: 'Roadmap',
        href: '/docs/roadmap'
      },
      changelog: {
        title: 'Changelog',
        href: '/docs/changelog'
      }
    }
  }
}

export default meta
