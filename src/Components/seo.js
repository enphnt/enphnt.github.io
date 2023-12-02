import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, getSrc } from "gatsby-plugin-image";

const Seo = ({ excerpt, title, slug, hero_image }) => {
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

  const [currentUrl, setCurrentUrl] = useState(siteUrl);
  const blurb = excerpt || siteDescription;
  const heroImageObject = getImage(hero_image || null);
  const heroImageUrl = getSrc(heroImageObject);
  const fullTitle = `${title.replace("/", "")} ⍟ ${siteTitle}`;
  const fullImageUrl = heroImageUrl ? `${siteUrl}${heroImageUrl}` : `${siteUrl}${siteImage}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <>
      {/* Remove the <html> tag from here */}
      <meta name="description" content={blurb} />
      {/* title of page */}
      <meta property="og:title" content={fullTitle} />
      {/* type of page */}
      <meta property="og:type" content={slug ? "article" : "website"} />
      {/* canonical URL of page */}
      <meta property="og:url" content={currentUrl} />
      {/* description of page */}
      <meta property="og:description" content={blurb} />
      {/* image of page */}
      <meta property="og:image" content={fullImageUrl} />
      {/* name of website */}
      <meta property="og:site_name" content={siteTitle} />
      <title>{fullTitle}</title>
    </>
  );
};

export default Seo;
