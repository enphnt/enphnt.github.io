import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TagLinks from '../../components/tag-links';
import TableOfContents from '../../components/table-of-contents';
import RandomBlog from '../../components/random-post/blog';
import Breadcrumbs from '../../components/breadcrumbs';

const maxHeight = "40vh";

const BlogPost = ({ data, children }) => {
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
    <Layout >
      <div style={{ paddingTop: 20 }}>
        <Breadcrumbs title={title} path="blog" />
        {
          heroImage && (
            <div style={{ textAlign: "right" }}>
              <div style={{ position: "relative", maxHeight: maxHeight }}>
                <GatsbyImage
                  image={heroImage}
                  alt={hero_image_alt}
                  style={{ maxHeight: maxHeight, borderRadius: 5, boxSizing: "border-box" }}
                />
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
                  {hero_image_alt}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 12 }}>
                Photo:{" "}
                <a
                  aria-label={hero_image_credit_link}
                  href={hero_image_credit_link}
                >
                  {hero_image_credit_text}
                </a>
              </p>
            </div>
          )
        }
        <h1>{title}</h1>
        <TagLinks tags={tags} />
        <h5>{date}</h5>
        <br />
        <TableOfContents tocs={tableOfContents} />
        <div>
          {children}
        </div>
        <br />
        <RandomBlog />
      </div>
      {/* // todo export const Head = () => <Seo title="Blog" />; */}
      <Seo title={title} excerpt={excerpt} slug={slug} hero_image={hero_image} />
    </Layout >
  );
};

export const query = graphql`
  query ($id: String) {
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

export default BlogPost;;