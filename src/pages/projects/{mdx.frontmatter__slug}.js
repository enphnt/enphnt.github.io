import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TagLinks from '../../components/tag-links';
import TableOfContents from '../../components/table-of-contents';
import RandomProject from '../../components/random-post/project';
import Breadcrumbs from '../../components/breadcrumbs';
import BackToTop from '../../components/back-to-top';

const Projects = ({ data, children }) => {
  const {
    mdx: {
      frontmatter: {
        title, tags, date, slug,
        hero_image, hero_image_alt, hero_image_credit_link, hero_image_credit_text,
      },
      excerpt,
      tableOfContents
    }
  } = data;
  const heroImage = getImage(hero_image);

  return (
    <div style={{ margin: 12, paddingTop: 20 }}>
      <Layout>
        <Breadcrumbs title={title} path="projects" />
        {
          heroImage ? (
            <div style={{ textAlign: "right" }}>
              <GatsbyImage
                image={heroImage}
                alt={hero_image_alt}
                style={{ boderRadius: 6 }}
              />
              <p>
                Photo:{" "}
                <a href={hero_image_credit_link}>
                  {hero_image_credit_text}
                </a>
              </p>
            </div>
          )
            : null
        }
        <h1>{title}</h1>
        <TagLinks tags={tags} />
        <h5>{date}</h5>
        <br />
        <TableOfContents tocs={tableOfContents} />
        <BackToTop />
        <br />
        <div>
          {children}
        </div>
        <br />
        <RandomProject />
      </Layout>
      {/* // todo export const Head = () => <Seo title="Blog" />; */}
      <Seo title={title} excerpt={excerpt} slug={slug} hero_image={hero_image} />
    </div>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      tableOfContents
      excerpt(pruneLength: 200)
      frontmatter {
        title
        tags
        slug
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