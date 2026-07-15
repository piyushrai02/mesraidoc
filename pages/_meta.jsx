export default {
  index: {
    title: 'Home',
    display: 'hidden',
    // Landing page renders full-bleed: drop the empty right-hand TOC
    // column, the "Home" breadcrumb, and prev/next pagination so the
    // hero uses the full content width instead of leaving a void.
    theme: {
      layout: 'full',
      toc: false,
      breadcrumb: false,
      pagination: false,
      timestamp: false
    }
  },
  guides: 'Guides',
  kb: 'Knowledge',
  recipes: 'Recipes',
  operations: {
    title: 'Operations',
    display: 'hidden'
  },
  roadmap: {
    title: 'Roadmap',
    display: 'hidden'
  },
  changelog: {
    title: 'Changelog',
    display: 'hidden'
  }
}
