/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nathan Phennel's website`,
    siteUrl: `https://enphnt.github.io/`,
    description: "My own little world for blogging, experimenting with code, sharing music and web shenanigans.",
    image: `/favicon.png`,
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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              extensions: [`.mdx`],
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },

        ],
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/tags/*'],
        serialize: ({ path }) => {
          const result = {
            url: `${path}`,
            changefreq: "weekly",
          };

          // mark homepage as higher priority
          if (path === "/") {
            return {
              ...result,
              priority: 0.7,
            };
          }

          return {
            ...result,
            priority: 0.5,
          };
        }
      },
    },
  ],
};
