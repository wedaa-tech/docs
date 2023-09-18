module.exports = {
  title: 'WeDAA',
  tagline: 'Well-defined Application Architecture',
  url: 'https://wedaa.tech',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'wedaa-tech',
  projectName: 'wedaa-tech.github.io',

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-VFHMSWMVTQ',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img',
    video: 'videos',
    navbar: {
      title: 'WeDAA',
      logo: {
        alt: 'WeDAA Logo',
        src: 'img/logo.png',
      },   
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/wedaa-tech/wedaa-tech.github.io',
          //label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: "Getting Started",
              to: 'getting-started',
            },
            {
              label: 'Guide',
              to: 'guide/introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/wedaa-tech',
            },
            {
              label: 'Contact Us',
              href: 'https://github.com/orgs/wedaa-tech/discussions',
            },
          ],
        },
      ],
    },
  },
};
