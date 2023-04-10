import * as React from 'react';
import { getImage, getSrc } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
  // Use static query to get site and all mdx data
  const { site, allMdx } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            slug
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const { title: siteTitle, description: siteDescription, image: siteImage, siteUrl } = site.siteMetadata;

  // Get the current url from the window object
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  // Filter the mdx nodes by matching the slug with the current url
  const mdx = allMdx.nodes.find(node => currentUrl.includes(node.frontmatter.slug));

  // If no mdx node is found, use the siteMetadata data as a fallback
  const isPost = mdx && !currentUrl.includes("/tags/");
  const blurb = isPost ? mdx.excerpt : siteDescription;
  const mdxTitle = isPost ? mdx.frontmatter.title : title;
  const url = isPost ? `${siteUrl}/${mdx.frontmatter.slug}/` : currentUrl;
  const hero_image = isPost ? mdx.frontmatter.hero_image : null;

  const heroImage = getImage(hero_image);
  const heroImageUrl = getSrc(heroImage);

  const fullTitle = `${mdxTitle.replace("/", "")} ⍟ ${siteTitle}`;
  const fullImageUrl = heroImageUrl ? `${siteUrl}${heroImageUrl}` : `${siteUrl}${siteImage}`;

  return (
    <>
      <html lang="en" />
      <meta name="description" content={blurb} />
      {/* title of page */}
      <meta property="og:title" content={fullTitle} />
      {/* type of page (change it according to page type) */}
      <meta property="og:type" content={isPost ? "article" : "website"} />
      {/* canonical URL of page */}
      <meta property="og:url" content={url} />
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