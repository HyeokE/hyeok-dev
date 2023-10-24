const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Jason',
    image: '/profile.png', // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'frontend developer',
    bio: '긱한 개발자가 될거에요.',
    email: 'jhjeong00@gmail.com',
    linkedin: '',
    github: 'HyeokE',
    instagram: '',
  },
  projects: [
    {
      name: 'GDSC DJU Websites',
      href: 'https://github.com/GDSC-Daejin/gdsc-dju-websites',
    },
    {
      name: 'GDSC DJU Design Seed',
      href: 'https://github.com/GDSC-Daejin/design-seed',
    },
  ],
  // blog setting (required)
  blog: {
    title: 'Hyeok Devlog',
    description: 'welcome to Hyeok Devlog!',
    theme: 'auto', // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://hyeok.dev/',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://thumbnail.hyeok.dev', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || '',
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  },
  naverSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NAVER_SITE_VERIFICATION || '',
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: 'HyeokE/jason-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
module.exports = CONFIG;
