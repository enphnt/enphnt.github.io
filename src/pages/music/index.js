import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import ArticleListItem from '../../components/article-list-item';

const MusicPage = ({ data }) => {
  const list = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Layout>
      <div style={list}>
        <h1>Music Posts</h1>
        <p >
          A collection of posts with original music, playlists and music theory included. I also have written
          about <Link aria-label="Over to Projects" to="/projects/">projects</Link>, too.
        </p>
        {
          data.allMdx.nodes.map(node =>
            <ArticleListItem node={node} path={"blog"} />
          )
        }
      </div>
    </Layout>
  );
};

// TODO: make it find any post about music from projects and blog folders
export const query = graphql`
  query {
    allMdx(
      filter: {
        internal: {contentFilePath: {regex: "/blog|projects/"}}
        frontmatter: {tags:  {regex: "/music/"}}
      }
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
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Music" />;

export default MusicPage;