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

const Projects = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div style={{ margin: 12 }}>
      <Layout>
        <div className={breadcrumbs}>
          <Link className={breadcrumbLink} to="/">Home</Link>
          <div className={breadcrumbLinkSeparator}>{`>`}</div>
          <Link className={breadcrumbLink} to="/projects">Projects</Link>
          <div className={breadcrumbLinkSeparator}>{`>`}</div>
          <Link className={breadcrumbLink} to={`./`}>{data.mdx.frontmatter.title}</Link>
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
        <h5>{data.mdx.frontmatter.date}</h5>
        <div className={content}>
          {children}
        </div>
        <br />
        <Link to="/projects">Go back to the projects homepage</Link>
      </Layout>
    </div>
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

export const Head = () => <Seo title="Super Cool Projects" />;

export default Projects;