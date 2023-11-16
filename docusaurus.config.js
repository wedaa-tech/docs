module.exports = {
  title: 'WeDAA',
  tagline: 'Well-defined Application Architecture',
  url: 'https://wedaa.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'wedaa-tech',
  projectName: 'wedaa-tech.github.io',
  staticDirectories: ['static'],
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
          routeBasePath: '/docs', // Serve the docs at the site's root
        },
        blog: {
          blogDescription: "Dive into our Full Stack Prototyping Platform Blog. Discover insights, tips, and best practices for crafting seamless and scalable applications from concept to reality.",
          routeBasePath: '/blog',
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
    navbar: {
      title: 'WeDAA',
      logo: {
        alt: 'WeDAA Logo',
        src: 'img/logo.png',
        href: '/docs'
      },   
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
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
              to: 'docs/getting-started',
            },
            {
              label: 'Guide',
              to: 'docs/guide/introduction',
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
