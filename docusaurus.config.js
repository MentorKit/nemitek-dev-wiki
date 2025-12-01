// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import dotenv from 'dotenv';
import {themes as prismThemes} from 'prism-react-renderer';

// Load environment variables from .env file
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NemiTek Dev Wiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://devdocs.nemitek.simplylearn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sinfjell', // Usually your GitHub org/user name.
  projectName: 'nemitek-dev-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sinfjell/nemitek-dev-wiki/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options for the search plugin
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: 'en',
        style: undefined,
        maxSearchResults: 10,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2,
        },
      },
    ],
    // Only include chat plugin if OpenAI API key is available
    ...(process.env.OPENAI_API_KEY
      ? [
          [
            'docusaurus-plugin-chat-page',
            {
              openai: {
                apiKey: process.env.OPENAI_API_KEY,
              },
            },
          ],
        ]
      : []),
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '6B589B85EE8A45BA',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'NemiTek Logo',
          src: 'img/Nemitek_logo-1a.png',
        },
        items: [
          // Only show Chat link if OpenAI API key is available
          ...(process.env.OPENAI_API_KEY
            ? [
                {
                  to: '/chat',
                  label: 'Chat',
                  position: 'right',
                },
              ]
            : []),
          {
            type: 'html',
            position: 'right',
            value: '<a href="/docs-combined.md" download="docs-combined.md" class="download-button" style="background-color: var(--ifm-color-primary); color: white; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 500; text-decoration: none; display: inline-block; transition: background-color 0.2s;">Download MD</a>',
          },
          {
            href: 'https://github.com/Sinfjell/nemitek-dev-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/Sinfjell/nemitek-dev-wiki',
              },
              {
                label: 'Custom WP Plugin',
                href: 'https://bitbucket.org/simplylearn/nemitek-event-integration-manager/src/main/',
              },
              {
                label: 'Live Application',
                href: 'https://arrangement.nemitek.no',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NemiTek. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

