import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { article, post, postList, thumbnail, highlightAnchor } from "./index.module.css";

const BlogPage = ({ data }) => {

  return (
    <Layout>
      <div className={postList}>
        <h1>Blog Posts</h1>
        <p>
          A collection of blog posts that I've written on various topics. I also have written
          about <a className={highlightAnchor} href="/projects">projects</a>, too.
        </p>
        {
          data.allMdx.nodes.map(node => {
            const thumb = getImage(node.frontmatter.thumbnail);
            return (
              <Link to={`/blog/${node.frontmatter.slug}`}>
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

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;