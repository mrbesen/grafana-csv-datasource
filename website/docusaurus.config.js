module.exports = {
  title: 'CSV for Grafana',
  url: 'https://marcusolsson.github.io',
  baseUrl: '/grafana-csv-datasource/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'marcusolsson', // Usually your GitHub org/user name.
  projectName: 'grafana-csv-datasource', // Usually your repo name.
  scripts: [{ src: 'https://plausible.io/js/plausible.js', defer: true, 'data-domain': 'marcus.se.net' }],
  themeConfig: {
    navbar: {
      title: 'CSV Data Source for Grafana',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/marcusolsson/grafana-csv-datasource',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://grafana.com/plugins/marcusolsson-csv-datasource',
          label: 'Marketplace',
          position: 'right',
        },
        {
          href: 'https://marcus.se.net',
          label: 'Who am I?',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/',
            },
            {
              label: 'Configuration',
              to: 'configuration/',
            },
            {
              label: 'Query editor',
              to: 'query-editor/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/marcusolsson/grafana-csv-datasource/discussions',
            },
            {
              label: 'Support',
              href: 'https://github.com/marcusolsson/grafana-csv-datasource/discussions/categories/q-a',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/marcusolsson',
            },
          ],
        },
        {
          title: 'Data sources',
          items: [
            { label: 'CSV', href: 'https://github.com/marcusolsson/grafana-csv-datasource' },
            { label: 'JSON API', href: 'https://github.com/marcusolsson/grafana-json-datasource' },
            { label: 'Static', href: 'https://github.com/marcusolsson/grafana-static-datasource' },
          ],
        },
        {
          title: 'Panels',
          items: [
            { label: 'Calendar', href: 'https://github.com/marcusolsson/grafana-calendar-panel' },
            { label: 'Dynamic text', href: 'https://github.com/marcusolsson/grafana-dynamictext-panel' },
            { label: 'Gantt', href: 'https://github.com/marcusolsson/grafana-gantt-panel' },
            { label: 'Hexmap', href: 'https://github.com/marcusolsson/grafana-hexmap-panel' },
            { label: 'Hourly heatmap', href: 'https://github.com/marcusolsson/grafana-hourly-heatmap-panel' },
            { label: 'Treemap', href: 'https://github.com/marcusolsson/grafana-treemap-panel' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Marcus Olsson`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/marcusolsson/grafana-csv-datasource/edit/main/website/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
