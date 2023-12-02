const fs = require("fs");
const Path = require('path');
const categoryPath = path => path === "/tags/" || path === "/blog/" || path === "/code/" || path === "/music/";
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
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
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
        name: `pdf`,
        path: `${__dirname}/pdf`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      mediaType: "audio/mpeg",
      options: {
        path: `${__dirname}/audio`,
        name: 'audio',
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
      },
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
        // filterpages: true means the page is excluded
        //   only category and authentic project paths are canon
        filterPages: ({ path }) => !categoryPath(path) && !fs.existsSync(Path.join(__dirname, path)),
        serialize: ({ path }) => {
          const result = {
            url: `${path}`,
            changefreq: "daily",
          };

          // mark homepage as higher priority
          if (path === "/") {
            return {
              ...result,
              priority: 0.8,
            };
          }

          // rank higher if category path
          if (categoryPath(path)) {
            return {
              ...result,
              priority: 0.7,
            };
          }

          // uses filterPages to only include canonicals:
          //   path is considered canonical if real filepath exists in src
          return {
            ...result,
            priority: 0.5,
          };
        }
      },
    }
  ],
};
