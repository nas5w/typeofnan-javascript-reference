/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-snippets`,
        path: `${__dirname}/src/code-snippets`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
