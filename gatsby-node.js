const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/pages/blog/index.js");
  const tagTemplate = path.resolve("src/templates/tags.js");

  const result = await graphql(`
    {
      postsRemark: allMdx(
        sort: { frontmatter: { date: DESC }}
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT }}) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};