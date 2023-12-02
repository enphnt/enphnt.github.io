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
        <h1>Code Posts</h1>
        <p >
          A collection of posts with original music, playlists and music theory included. In addition to post about
          code I also write about <Link aria-label={`Over to Music`} to={"/music/"}>music</Link>, too.
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
      filter: {
        internal: {contentFilePath: {regex: "/blog/"}}
        frontmatter: {tags:  {regex: "/web dev|software/"}}
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