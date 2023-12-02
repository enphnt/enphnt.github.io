import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import ArticleListItem from '../../components/article-list-item';

const excerpt = "A collection of posts that I've written on various topics. Check em' out!";

const ArticleList = ({ data }) => {
  const list = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Layout>
      <div style={list}>
        <h1>All Blog Posts</h1>
        <p>
          {excerpt} I also have split these posts into topics
          like <Link aria-label={`Over to code`} to={"/code/"}>code</Link>
          {" "}and <Link aria-label={`Over to Music`} to={"/music/"}>music</Link>, too.
        </p>
        {
          data.allMdx.nodes.map((node, idx) =>
            <ArticleListItem key={node.id} node={node} path={"blog"} idx={idx} />
          )
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/blog/"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        excerpt(pruneLength: 180)
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
        id
      }
    }
  }
`;

export const Head = ({ location }) => <Seo title="Blog" location={location} />;

export default ArticleList;