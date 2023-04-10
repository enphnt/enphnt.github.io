import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TagLinks from '../../components/tag-links';
import TableOfContents from '../../components/table-of-contents';
import RandomProject from '../../components/random-post/project';
import Breadcrumbs from '../../components/breadcrumbs';

const Projects = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div style={{ margin: 12, paddingTop: 20 }}>
      <Layout>
        <Breadcrumbs title={data.mdx.frontmatter.title} path="projects" />
        {
          heroImage ? (
            <div style={{ textAlign: "right" }}>
              <GatsbyImage
                image={heroImage}
                alt={data.mdx.frontmatter.hero_image_alt}
                style={{ boderRadius: 6 }}
              />
              <p>
                Photo:{" "}
                <a href={data.mdx.frontmatter.hero_image_credit_link}>
                  {data.mdx.frontmatter.hero_image_credit_text}
                </a>
              </p>
            </div>
          )
            : null
        }
        <h1>{data.mdx.frontmatter.title}</h1>
        <TagLinks tags={data.mdx.frontmatter.tags} />
        <h5>{data.mdx.frontmatter.date}</h5>
        <br />
        <TableOfContents tocs={data.mdx.tableOfContents} />
        <br />
        <div>
          {children}
        </div>
        <br />
        <RandomProject />
      </Layout>
      <Seo title={`${data.mdx.frontmatter.title}`} />
    </div>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      tableOfContents
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Projects;