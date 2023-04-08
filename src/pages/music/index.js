import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { article, post, postList, thumbnail } from "./../blog/index.module.css";

const MusicPage = ({ data }) => {

  return (
    <Layout>
      <div className={postList}>
        <h1>Music Posts</h1>
        <p >
          A collection of posts with original music, playlists and music theory included. I also have written
          about <Link aria-label="Over to Projects" to="/projects/">projects</Link>, too.
        </p>
        {
          data.allMdx.nodes.map((node, index) => {
            const path = node.internal.contentFilePath
              .replace(`/${node.frontmatter.slug}/index.mdx`, "");
            const urlFolder = path.substring(path.lastIndexOf('/'));

            const thumb = getImage(node.frontmatter.thumbnail);
            return (
              <Link aria-label={node.frontmatter.slug} key={index} to={`${urlFolder}/${node.frontmatter.slug}`}>
                <article className={article} key={node.id}>
                  <div className={thumbnail}>
                    <GatsbyImage
                      image={thumb}
                      alt={`Thumbnail for ${node.frontmatter.title}`}
                    />
                  </div>
                  <div className={post}>
                    <h2>{node.frontmatter.title}</h2>
                    <h5>{node.frontmatter.date}</h5>
                    <p>{node.excerpt}</p>
                  </div>
                </article>
              </Link>

            );
          })
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