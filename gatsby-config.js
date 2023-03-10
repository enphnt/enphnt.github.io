/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nathan Phennel's website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pdf`,
        path: `${__dirname}/pdf`,
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    // "gatsby-remark-images",
  ],
};
