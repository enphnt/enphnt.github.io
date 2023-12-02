import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ArticleListItem from "../components/article-list-item";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const tagHeader =
    `Found ${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;
  const AllTags = () =>
    <div style={{ textAlign: "center", margin: 16 }}>
      <Link to="/tags/">Show all tags</Link>
    </div>;
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>Tag: "{tag}"</h1>
        <h2>{tagHeader}</h2>
        <AllTags />
      </div>
      {
        edges.map(({ node }, idx) => <ArticleListItem key={idx} node={node} idx={idx} />)
      }
      <br />
      <AllTags />
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
        node {excerpt(pruneLength: 180)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  }
`;