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
      items: [
        'introduction/what-is-wedaa',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/quickstart',
        'get-started/tutorials',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/react',
      ],
    },
    {
      type: 'category',
      label: 'Reference Architectures',
      items: [
        'reference-architectures/ui-backend',
      ],
    },
    {
      type: 'category',
      label: 'Featured Applications',
      items: [
        'featured-applications/full-stack',
      ],
    },
    {
      type: 'category',
      label: 'Developers\' Guide',
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
      items: [
        'deployment/azure',
      ],
    },
    {
      type: 'category',
      label: 'Core Architecture',
      items: [
        'core-architecture/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/local-setup',
      ],
    },
    {
      type: 'category',
      label: 'Products',
      items: [
        'products/sample',
      ],
    },
  ],
};

module.exports = sidebars;
