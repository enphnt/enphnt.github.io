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
} from "./index.module.css";
import TagLinks from '../../components/tag-links';
import TableOfContents from '../../components/table-of-contents';
import RandomBlog from '../../components/random-post/blog';
// Define some variables for the styles
const maxHeight = "40vh";

const BlogPost = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout >
      <div style={{ paddingTop: 40 }}>
        <div className={breadcrumbs}>
          <Link aria-label="Home" className={breadcrumbLink} to="/">Home</Link>
          <div className={breadcrumbLinkSeparator}>&#187;</div>
          <Link aria-label="Blog" className={breadcrumbLink} to="/blog/">Blog</Link>
          <div className={breadcrumbLinkSeparator}>&#187;</div>
          <Link aria-label={data.mdx.frontmatter.title} className={breadcrumbLinkHighlight} to={`./`}>{data.mdx.frontmatter.title}</Link>
        </div>
        {
          heroImage && (
            <>
              {/* Use a div element with a relative position to contain the image and the overlay text */}
              <div style={{ position: "relative", maxHeight: maxHeight }}>
                <GatsbyImage
                  image={heroImage}
                  alt={data.mdx.frontmatter.hero_image_alt}
                  style={{ maxHeight: maxHeight, borderRadius: 5, boxSizing: "border-box" }}
                />
                {/* Use a span element with a style attribute for the overlay text */}

                <span style={{
                  position: "absolute",
                  top: "4%",
                  right: "4%",
                  color: "white",
                  fontSize: "3vh",
                  textAlign: "right",
                  fontWeight: 600,
                  textShadow: "2px 2px 6px black",
                  transformOrigin: "bottom",
                  maxWidth: "80%",
                  whiteSpace: "pre-wrap",
                  letterSpacing: ".2rem",
                }}>
                  {/* Use the hero_image_alt as the overlay text */}
                  {data.mdx.frontmatter.hero_image_alt}
                </span>
              </div>
              <p style={{ margin: "2px 0", fontSize: 12 }}>
                Photo Credit:{" "}
                <a
                  aria-label={data.mdx.frontmatter.hero_image_credit_link}
                  href={data.mdx.frontmatter.hero_image_credit_link}
                >
                  {data.mdx.frontmatter.hero_image_credit_text}
                </a>
              </p>
            </>
          )
        }
        <h1>{data.mdx.frontmatter.title}</h1>
        <TagLinks tags={data.mdx.frontmatter.tags} />
        <h5>{data.mdx.frontmatter.date}</h5>
        <br />
        <TableOfContents tocs={data.mdx.tableOfContents} />

        <div className={content}>
          {children}
        </div>
        <br />
        <RandomBlog />
      </div>
      <Seo title={`${data.mdx.frontmatter.title}`} />
    </Layout >
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

export default BlogPost;;