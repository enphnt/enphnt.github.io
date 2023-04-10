import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader =
    `Found ${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout>
      <h1>Tag: "{tag}"</h1>
      <h2>{tagHeader}</h2>
      <ul>
        {edges.map(({ node }) => {
          const { title, slug } = node.frontmatter;
          const path = node.internal.contentFilePath.replace(`/${slug}/index.mdx`, "");
          const urlFolder = path.substring(path.lastIndexOf('/'));

          return (
            <li key={slug}>
              <Link to={`${urlFolder}/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <br />
      <Link to="/tags/">Show all tags</Link>
      <Seo title={`Tagged with: '${tag}'`} />

    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  }
`;