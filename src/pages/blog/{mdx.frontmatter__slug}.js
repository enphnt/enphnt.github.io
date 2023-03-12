import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import {
  breadcrumbs,
  breadcrumbLink,
  breadcrumbLinkHighlight,
  breadcrumbLinkSeparator,
  content,
  hero
} from "./index.module.css";

const BlogPost = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout >
      <div className={breadcrumbs}>
        <Link className={breadcrumbLink} to="/">Home</Link>
        <div className={breadcrumbLinkSeparator}>&#187;</div>
        <Link className={breadcrumbLink} to="/blog">Blog</Link>
        <div className={breadcrumbLinkSeparator}>&#187;</div>
        <Link className={breadcrumbLinkHighlight} to={`./`}>{data.mdx.frontmatter.title}</Link>
      </div>

      {
        heroImage ? (
          <>
            <GatsbyImage
              image={heroImage}
              alt={data.mdx.frontmatter.hero_image_alt}
              style={{ maxHeight: "40vh" }}
              className={hero}
            />
            <p style={{ margin: "2px 0 30px", fontSize: 10, textAlign: "right" }}>
              Photo Credit:{" "}
              <a href={data.mdx.frontmatter.hero_image_credit_link} >
                {data.mdx.frontmatter.hero_image_credit_text}
              </a>
            </p>
          </>
        )
          : null
      }
      <h1>{data.mdx.frontmatter.title}</h1>
      <h5>{data.mdx.frontmatter.date}</h5>
      <div className={content}>
        {children}
      </div>
      <br />
      <Link to="/blog">Go back to the blog homepage</Link>
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