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
  outputFileTracingRoot: '/Users/piyushkumarrai/Documents/GitHub/mesraidoc',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['nextra-theme-docs']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
        poll: false,
        aggregateTimeout: 300
      }
      // Reduce Fast Refresh sensitivity
      if (!isServer) {
        config.optimization = {
          ...config.optimization,
          moduleIds: 'deterministic'
        }
      }
    }
    return config
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'production' 
              ? 'public, max-age=0, must-revalidate, stale-while-revalidate=86400' 
              : 'no-store, must-revalidate',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
})
