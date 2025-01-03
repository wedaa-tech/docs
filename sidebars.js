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
        'introduction/Introduction to WeDAA',
        'introduction/Why WeDAA',
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
        'get-started/ai-wizard',
        'get-started/advance',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      link: {
        type: 'generated-index',
      },
      items: [
        'developers-guide/prerequisites',
        'developers-guide/ui-gateway',
        'developers-guide/service-node',
        'developers-guide/global-configurations',
        'developers-guide/communication',
        'developers-guide/project-structure',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
      },
      items: [
        'components/user_interface',
        'components/backend',
        'components/gateway',
        'components/service_discovery',
        'components/keycloak',
        'components/persistence',
        'components/docusaurus',
        'components/elastic',
      ],
    },
    {
      type: 'category',
      label: 'Reference Architectures',
      link: {
        type: 'generated-index',
      },
      items: [
        'reference-architectures/react-java-fullstack',
        'reference-architectures/react-go-fullstack',
        'reference-architectures/ployglot-fullstack',
        'reference-architectures/keycloak-authentication',
        'reference-architectures/java-elk-fullstack',
        'reference-architectures/headless',
        'reference-architectures/comprehensive-microservices',
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
        'featured-applications/notes',
        'featured-applications/personal-profile',
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
        'deployment/aws',
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
