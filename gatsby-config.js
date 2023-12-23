const { languages, defaultLanguage } = require('./languages')

const mode = process.env.NODE_ENV

module.exports = {
  siteMetadata: {
    title: `Guerner & Irmãos S.A.`,
    description: `Website da Guerner & Irmãos S.A.`,
    author: `@kikogoncalves`,
    siteUrl: `https://guerner.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guerner & Irmãos S.A.`,
        short_name: `guerner`,
        start_url: `/`,
        theme_color: `#124842`,
        display: `standalone`,
        icon: `static/images/icon.png`,
        icons: [
          {
            src: 'static/images/icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`pt`, `en`],
        defaultLanguage: `pt`,
        lng: `pt`,
        fallbackLng: `pt`,
        supportedLngs: [`pt`, `en`],
        siteUrl: mode !== 'production' ? 'http://localhost:8000/' : 'https://guernerpt.netlify.app/',
        trailingSlash: 'always', // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        i18nextOptions: {
          debug: false,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
          // ... any other i18next options
        },
      },
    },
    {
      resolve: '@vercel/gatsby-plugin-vercel-analytics',
      options: {
        debug: false,
      },
    },
  ],
}
