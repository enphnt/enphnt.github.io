import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  return (
    <>
      <html lang="en" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="image" content={data.site.siteMetadata.image} />
      <title>{title} | {data.site.siteMetadata.title}</title>
    </>
  );
};

export default Seo;