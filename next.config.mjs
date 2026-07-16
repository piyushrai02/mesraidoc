import nextra from 'nextra'
import { remarkMermaid } from '@theguild/remark-mermaid'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [
      remarkMermaid
    ]
  }
})

export default withNextra({
  reactStrictMode: false,
  trailingSlash: false,
  // Hide the floating Next.js dev badge (the black "N" circle at the
  // bottom-left in `next dev`). It never ships to production, but it
  // reads as a stray misplaced button while developing locally.
  devIndicators: false,
  images: {
    unoptimized: true,
  },

  // Security headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },

  // Public-friendly URLs for the MCP server. The actual route handler
  // lives at `pages/api/[transport].js` so it resolves to `/api/mcp`
  // (and `/api/sse`, `/api/message`) internally; these rewrites let
  // external clients reach the streamable-HTTP transport at the
  // canonical `/mcp` path the way the managed-mcp-servers.json config
  // entry `mesrai-docs-default` expects.
  async rewrites() {
    return [
      { source: '/mcp', destination: '/api/mcp' },
      { source: '/sse', destination: '/api/sse' },
      { source: '/message', destination: '/api/message' },
    ]
  },

  // Redirects for SEO + legacy URL preservation
  async redirects() {
    return [
      { source: '/docs', destination: '/', permanent: true },

      // Legacy URL patterns → new Mesrai paths (preserves SEO + bookmarks)
      { source: '/how_to_use/en/:slug*', destination: '/guides/:slug*', permanent: true },
      { source: '/how_to_deploy/en/:slug*', destination: '/operations/:slug*', permanent: true },
      { source: '/cookbook/en/:slug*', destination: '/recipes/:slug*', permanent: true },
      { source: '/knowledge_base/en/:slug*', destination: '/kb/:slug*', permanent: true },

      // Legacy mesraidoc paths (pre-Mintlify port) — preserve Google-indexed URLs
      { source: '/introduction', destination: '/guides/overview', permanent: true },
      { source: '/introduction/what-is-mesrai', destination: '/guides/overview', permanent: true },
      { source: '/introduction/core-architecture', destination: '/operations/mesrai_architecture', permanent: true },
      { source: '/introduction/key-capabilities', destination: '/guides/overview', permanent: true },
      { source: '/setup', destination: '/guides/quickstart', permanent: true },
      { source: '/setup/installation', destination: '/guides/quickstart', permanent: true },
      { source: '/setup/environment', destination: '/guides/quickstart', permanent: true },
      { source: '/ide-setup', destination: '/kb/how-to-import-rules-from-ide-tools', permanent: true },
      { source: '/ide-setup/overview', destination: '/kb/how-to-import-rules-from-ide-tools', permanent: true },
      { source: '/ide-setup/vscode', destination: '/kb/how-to-import-rules-from-ide-tools', permanent: true },
      { source: '/features', destination: '/guides/overview', permanent: true },
      { source: '/features/ai-review-engine', destination: '/guides/code_review/flow', permanent: true },
      { source: '/features/context-awareness', destination: '/guides/code_review/configs/mesrai_rules', permanent: true },
      { source: '/features/architectural-analysis', destination: '/guides/code_review/flow', permanent: true },
      { source: '/features/privacy-security', destination: '/guides/security/data_usage', permanent: true },
      { source: '/features/organizations/billing', destination: '/guides/pricing', permanent: true },
      { source: '/features/organizations/:slug*', destination: '/guides/workspace_roles', permanent: true },
      { source: '/features/teams/activity-logs', destination: '/guides/workspace_roles', permanent: true },
      { source: '/features/teams/:slug*', destination: '/guides/workspace_roles', permanent: true },
      { source: '/features/:slug*', destination: '/guides/overview', permanent: true },
      { source: '/ai-review', destination: '/guides/code_review/flow', permanent: true },
      { source: '/ai-review/overview', destination: '/guides/code_review/flow', permanent: true },
      { source: '/ai-review/token-usage', destination: '/guides/byok', permanent: true },
      { source: '/ai-review/:slug*', destination: '/guides/code_review/flow', permanent: true },
      { source: '/performance', destination: '/guides/cockpit/overview', permanent: true },
      { source: '/performance/overview', destination: '/guides/cockpit/overview', permanent: true },
      { source: '/performance/scaling', destination: '/operations/mesrai_architecture', permanent: true },
      { source: '/performance/:slug*', destination: '/guides/cockpit/overview', permanent: true },
      { source: '/integrations', destination: '/kb/introduction', permanent: true },
      { source: '/integrations/:slug*', destination: '/kb/introduction', permanent: true },
      { source: '/api-reference', destination: '/guides/overview', permanent: true },
      { source: '/api-reference/:slug*', destination: '/guides/overview', permanent: true },
      { source: '/billing', destination: '/guides/pricing', permanent: true },
      { source: '/billing/:slug*', destination: '/guides/pricing', permanent: true },
      { source: '/faq', destination: '/guides/overview', permanent: true },

      // Hidden self-host stubs → safe targets
      { source: '/kb/how-to-self-host-ai-code-review', destination: '/guides/overview', permanent: false },
      { source: '/guides/cli/self_hosted', destination: '/guides/cli/introduction', permanent: false },
      { source: '/guides/cli/overview', destination: '/guides/cli/introduction', permanent: true },
      { source: '/guides/cli/ci_cd', destination: '/guides/cli/ai_agents', permanent: true }
    ]
  },
})
