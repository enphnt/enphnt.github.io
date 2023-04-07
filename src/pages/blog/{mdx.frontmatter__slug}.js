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
import TagLinks from '../../components/tagLinks';
import TableOfContents from '../../components/tableOfContents';

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
          heroImage ? (
            <>
              <GatsbyImage
                image={heroImage}
                alt={data.mdx.frontmatter.hero_image_alt}
                style={{ maxHeight: "40vh" }}
                className={hero}
              />
              <p style={{ margin: "2px 0", fontSize: 10, textAlign: "right" }}>
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
            : null
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
        <Link aria-label="Back to Blog" to="/blog/">Go back to the blog homepage</Link>
      </div>
      <Seo title={`${data.mdx.frontmatter.title}`} />
    </Layout>
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