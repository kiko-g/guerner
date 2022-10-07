module.exports = {
  siteMetadata: {
    title: `Guerner`,
    description: `Guerner website`,
    author: `@kikogoncalves`,
    siteUrl: `https://guerner.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `guerner`,
        short_name: `guerner`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
