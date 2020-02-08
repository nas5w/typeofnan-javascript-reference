/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://reference.typeofnan.dev/sitemap.xml`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `source sans pro\:300,400,400i,700`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-snippets`,
        path: `${__dirname}/src/code-snippets`
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106974426-7"
      }
    }
  ]
};
