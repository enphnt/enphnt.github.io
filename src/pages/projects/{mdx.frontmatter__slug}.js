import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import {
  breadcrumbs,
  breadcrumbLink,
  breadcrumbLinkSeparator,
  content,
  hero
} from "../blog/index.module.css";
import TagLinks from '../../components/tagLinks';
import TableOfContents from '../../components/tableOfContents';

const Projects = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div style={{ margin: 12, paddingTop: 40 }}>
      <Layout>
        <div className={breadcrumbs}>
          <Link aria-label="Home" className={breadcrumbLink} to="/">Home</Link>
          <div className={breadcrumbLinkSeparator}>&#187;</div>
          <Link aria-label="Projects" className={breadcrumbLink} to="/projects/">Projects</Link>
          <div className={breadcrumbLinkSeparator}>&#187;</div>
          <Link aria-label={data.mdx.frontmatter.title} className={breadcrumbLink} to={`./`}>{data.mdx.frontmatter.title}</Link>
        </div>

        {
          heroImage ? (
            <>
              <GatsbyImage
                image={heroImage}
                alt={data.mdx.frontmatter.hero_image_alt}
                className={hero}
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
        <h1>{data.mdx.frontmatter.title}</h1>
        <TagLinks tags={data.mdx.frontmatter.tags} />
        <h5>{data.mdx.frontmatter.date}</h5>
        <br />
        <TableOfContents tocs={data.mdx.tableOfContents} />
        <br />
        <div className={content}>
          {children}
        </div>
        <br />
        <Link aria-label="back to Projects" to="/projects/">Go back to the projects homepage</Link>
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