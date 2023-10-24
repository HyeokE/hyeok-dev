/** @type {import('next-sitemap').IConfig} */

const CONFIG = require("./morethan-log.config");

module.exports = {
  siteUrl: CONFIG.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${CONFIG.link}/server-sitemap.xml`],
  },
};
