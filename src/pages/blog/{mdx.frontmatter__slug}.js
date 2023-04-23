import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import TagLinks from '../../components/tag-links';
import TableOfContents from '../../components/table-of-contents';
import RandomPost from '../../components/random-post';
import Breadcrumbs from '../../components/breadcrumbs';
import BackToTop from '../../components/back-to-top';
import HeroImage from '../../components/hero-image';

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

  return (
    <Layout >
      <div style={{ paddingTop: 20 }}>
        <Breadcrumbs title={title} path="blog" />
        {
          hero_image &&
          <HeroImage
            image={hero_image}
            alt={hero_image_alt}
            credit={hero_image_credit_text}
            link={hero_image_credit_link}
          />
        }
        <h1>{title}</h1>
        <TagLinks tags={tags} />
        <h5>{date}</h5>
        <br />
        <TableOfContents tocs={tableOfContents} />
        <BackToTop />
        <div>
          {children}
        </div>
        <br />
        <RandomPost />
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