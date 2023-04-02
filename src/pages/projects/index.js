import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { article, post, postList, thumbnail, highlightAnchor } from "../blog/index.module.css";

const ProjectsPage = ({ data }) => {

  return (
    <Layout>
      <div className={postList}>
        <h1>Projects</h1>
        <p>
          Here is a list of projects that I have discovered, been
          involved with or built from scratch myself. I also have
          a <Link aria-label="Blog" className={highlightAnchor} to="/blog/">blog</Link> section
          of the site, too.
        </p>
        {
          data.allMdx.nodes.map((node, index) => {
            const thumb = getImage(node.frontmatter.thumbnail);
            return (
              <Link aria-label={node.frontmatter.slug} key={index} to={`/projects/${node.frontmatter.slug}`}>
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
      filter: {internal: {contentFilePath: {regex: "/projects/"}}}
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

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;