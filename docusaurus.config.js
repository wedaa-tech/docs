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
        // {
        //   to: 'docs/index',
        //   activeBasePath: 'docs/index',
        //   label: 'Introduction',
        //   position: 'left',
        // },
        {
          type: 'doc',
          docId: 'DevelopersGuide/Concept',
          position: 'left',
          label: "Developer's Guide",
        },
        {
          type: 'doc',
          docId: 'Documentation/concept',
          position: 'left',
          label: 'Documentation',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
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
              label: "Developer's Guide",
              to: 'DevelopersGuide/Concept',
            },
            {
              label: 'Architecture',
              to: 'documentation/concept',
            },
            {
              label: 'Local Setup',
              to: 'documentation/localsetup',
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
              href: 'https://github.com/wedaa-tech/wedaa-tech.github.io',
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
