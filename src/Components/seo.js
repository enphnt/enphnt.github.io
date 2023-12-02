import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

const Seo = ({ excerpt, title, slug, hero_image, location, params, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  const { title: siteTitle, description: siteDescription, image: siteImage, siteUrl } = data.site.siteMetadata;

  const blurb = excerpt || siteDescription;
  const heroImageObject = getImage(hero_image || null);
  const heroImageUrl = getSrc(heroImageObject);
  const fullTitle = `${title.replace("/", "")} ⍟ ${siteTitle}`;
  const fullImageUrl = heroImageUrl ? `${siteUrl}${heroImageUrl}` : `${siteUrl}${siteImage}`;

  return <>
    {/* Remove the <html> tag from here else you'll face SSR issues due to mismatch server/client*/}
    {/* title of page */}
    <title>{fullTitle}</title>
    <meta property="og:title" content={fullTitle} />
    {/* type of page */}
    <meta property="og:type" content={slug ? "article" : "website"} />
    {/* canonical URL of page */}
    <meta property="og:url" content={siteUrl + location.pathname} />
    {/* description of page */}
    <meta name="description" content={blurb} />
    <meta property="og:description" content={blurb} />
    {/* image of page */}
    <meta property="og:image" content={fullImageUrl} />
    {/* name of website */}
    <meta property="og:site_name" content={siteTitle} />
  </>;
};

export default Seo;
