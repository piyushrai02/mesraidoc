/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.mesrai.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500', '/_*'],
  autoLastmod: true,

  // Advanced priority settings based on page importance
  transform: async (config, path) => {
    // High priority pages
    const highPriorityPages = ['/', '/introduction/what-is-mesrai', '/setup/installation', '/ide-setup/overview', '/ide-setup/vscode', '/faq'];
    // Medium-high priority pages
    const mediumHighPages = ['/features', '/integrations', '/api-reference'];

    let priority = config.priority;
    let changefreq = config.changefreq;

    if (highPriorityPages.includes(path) || path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (mediumHighPages.some(p => path.startsWith(p))) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog')) {
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
        disallow: ['/api/', '/_next/', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // AI/LLM crawlers - explicitly allow for better AI discovery
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
  },
}
