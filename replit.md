# Mesrai Documentation Platform

## Overview
Enterprise-grade documentation platform built with Next.js 15 and Nextra 3.2.2 for Mesrai - an AI-powered code review platform. The documentation provides comprehensive guides, API references, tutorials, and blog content for engineering teams.

## Project Goals
- **Performance**: Sub-5ms TTFB through static pre-rendering and edge caching
- **SEO**: Scores >90 with comprehensive metadata and sitemap
- **Lighthouse**: Performance >95, bundle size <250KB, first paint <400ms
- **Design**: Professional structure aligned with Mesrai branding (#101820 primary, #007AFF accent)
- **Maintainability**: Fully maintainable by engineers and writers with MDX content

## Tech Stack
- **Framework**: Next.js 15.5.4 (Pages Router)
- **Documentation**: Nextra 3.2.2 + nextra-theme-docs
- **Styling**: Tailwind CSS 3.4.17, PostCSS
- **Typography**: Inter (body) + Space Grotesk (headings)
- **Content**: MDX for rich documentation
- **Deployment**: Port 5000 (development)

## Project Structure
```
pages/
├── index.mdx                    # Homepage
├── _app.jsx                     # App wrapper
├── _meta.jsx                    # Root navigation
├── introduction/               
│   ├── what-is-mesrai.mdx
│   ├── key-capabilities.mdx
│   ├── core-architecture.mdx
│   └── _meta.jsx
├── setup/
│   ├── installation.mdx
│   └── _meta.jsx
├── ai-review/
│   ├── overview.mdx
│   └── _meta.jsx
├── billing/
│   ├── subscription-model.mdx
│   └── _meta.jsx
├── api-reference/
│   ├── auth-api.mdx
│   └── _meta.jsx
├── blog/
│   ├── superhuman-context.mdx
│   └── _meta.jsx
├── roadmap.mdx
└── changelog.mdx

styles/
├── globals.css                  # Global styles + Tailwind

theme.config.jsx                 # Nextra theme configuration
next.config.mjs                  # Next.js + Nextra setup
tailwind.config.js              # Tailwind configuration
```

## Recent Changes (October 13, 2025)

### Fixed Critical Issues
1. **Nextra 3 Component Syntax**: Changed from `<Card>` to `<Cards.Card>` (Nextra 3 requirement)
2. **Meta File Validation**: Removed references to non-existent pages in all _meta.jsx files
3. **Next.js 15 Compatibility**: Removed deprecated config options (optimizeFonts, swcMinify)
4. **Module Configuration**: Using Nextra 3.2.2 instead of v4 due to Pages Router compatibility
5. **Navigation Structure**: Restored Integrations and Performance sections to main navigation
6. **Caching Headers**: Added production-ready cache headers with stale-while-revalidate for edge caching (max-age=0 for HTML, immutable for static assets)
7. **Content Creation**: Added comprehensive Integrations and Performance documentation pages
8. **Mermaid Diagrams**: Configured mermaid support (using ASCII diagrams as fallback due to remark-mermaid compatibility)

### Working Features
- ✅ Homepage with card navigation
- ✅ Complete sidebar navigation (Introduction, Setup, Integrations, AI Review, Performance, Billing, API, Blog, Roadmap, Changelog)
- ✅ Table of contents (right sidebar)
- ✅ Dark mode (default)
- ✅ Search functionality (CTRL+K)
- ✅ GitHub integration
- ✅ API documentation with code examples
- ✅ MDX content rendering with Steps, Callout components
- ✅ Responsive design
- ✅ Production-ready caching headers
- ✅ Security headers (XSS, MIME, Frame protection)

## Key Configuration Notes

### Nextra 3 Requirements
- Use `import { Cards } from 'nextra/components'`
- Card syntax: `<Cards.Card title="..." href="..." />`
- Meta files must be `.jsx` (not `.json`) and use `export default {}`
- All meta file entries must have corresponding page files

### Next.js 15 Setup
- Using Pages Router (not App Router) due to Nextra 3 compatibility
- ES modules configuration (next.config.mjs)
- Port 5000 for development server
- Cache-Control headers configured for documentation updates

### Styling
- **Primary**: #101820 (Dark background)
- **Accent**: #007AFF (Links and CTAs)
- **Typography**: Inter for body, Space Grotesk for headings
- **Dark Mode**: Default theme with primaryHue: 210

## Development Commands
```bash
npm run dev          # Start development server on port 5000
npm run build        # Build for production
npm run start        # Start production server
```

## User Preferences
- None specified yet

## Architecture Decisions
1. **Nextra Version**: Using 3.2.2 instead of v4 because v4 requires App Router, which is not fully compatible with all Nextra features
2. **Tailwind Version**: Using v3.4.17 due to PostCSS plugin compatibility
3. **Content Strategy**: MDX files with frontmatter for flexible, maintainable documentation
4. **Navigation**: Hierarchical structure with _meta.jsx files for organization

## Next Steps / TODO
1. Add remaining documentation pages referenced in _meta.jsx files
2. Implement sitemap generation for SEO
3. Add more blog posts and tutorials
4. Configure deployment settings
5. Add analytics integration
6. Performance optimization and bundle analysis
7. Add more API reference documentation

## Known Issues
- None currently - all critical issues resolved

## Current Status
✅ **Fully operational** - Documentation platform is live and accessible at http://localhost:5000
