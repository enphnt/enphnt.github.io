import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {
        heroImage ? (
          <>
            <GatsbyImage
              image={heroImage}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
          </>
        )
          : null
      }
      {children}
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
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

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;