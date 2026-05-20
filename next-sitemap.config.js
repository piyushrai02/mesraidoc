/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.mesrai.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/404',
    '/500',
    '/_*',
    // hidden Operations pages (Enterprise-only references)
    '/operations/*',
    // hidden self-host stubs
    '/kb/how-to-self-host-ai-code-review',
    '/guides/cli/self_hosted',
    // provider-specific recipe duplicates (hidden from nav)
    '/recipes/fireworks',
    '/recipes/groq',
    '/recipes/novita',
    '/recipes/openrouter',
    '/recipes/together',
    // sidebar meta artifacts
    '/recipes/_meta',
    // helper page hidden from nav
    '/guides/atlassian-rovo-mcp-setup',
  ],
  autoLastmod: true,

  transform: async (config, path) => {
    const topPriority = [
      '/',
      '/guides/overview',
      '/guides/quickstart',
      '/guides/pricing',
      '/guides/byok',
    ];
    const highPriority = [
      '/guides/code_review',
      '/guides/cli',
      '/guides/cockpit',
      '/kb/introduction',
    ];

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (topPriority.includes(path)) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (highPriority.some(p => path.startsWith(p))) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/kb')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path.startsWith('/recipes')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    additionalSitemaps: [
      'https://docs.mesrai.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/404',
          '/500',
          '/operations/',
          '/kb/how-to-self-host-ai-code-review',
          '/guides/cli/self_hosted',
        ],
      },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      // AI / LLM crawlers — explicit allow for AI discovery
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
  },
}
