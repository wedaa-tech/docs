/**
 * Creating a sidebar enables you to:
 'create an ordered group of docs
 'render a sidebar for each doc of that group
 'provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts'heck

/** @type {import('@docusaurus/plugin'ontent'ocs').SidebarsConfig} */
const sidebars = {
  documentationSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'generated-index',
      },
      items: [
        'introduction/what-is-wedaa',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',
      link: {
        type: 'generated-index',
      },
      items: [
        'get-started/quickstart',
        'get-started/advance',
        'get-started/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
      },
      items: [
        'components/react',
      ],
    },
    {
      type: 'category',
      label: 'Reference Architectures',
      link: {
        type: 'generated-index',
      },
      items: [
        'reference-architectures/ui-backend',
      ],
    },
    {
      type: 'category',
      label: 'Featured Applications',
      link: {
        type: 'generated-index',
      },
      items: [
        'featured-applications/full-stack',
      ],
    },
    {
      type: 'category',
      label: 'Developers\' Guide',
      link: {
        type: 'generated-index',
      },
      items: [
        'developers-guide/prerequisites',
        'developers-guide/ui-gateway',
        'developers-guide/service-node',
        'developers-guide/global-configurations',
        'developers-guide/project-structure',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      link: {
        type: 'generated-index',
      },
      items: [
        'deployment/azure',
      ],
    },
    {
      type: 'category',
      label: 'Core Architecture',
      link: {
        type: 'generated-index',
      },
      items: [
        'core-architecture/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
      },
      items: [
        'troubleshooting/local-setup',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      link: {
        type: 'generated-index',
      },
      items: [
        'products/sample',
      ],
    },
  ],
};

module.exports = sidebars;
