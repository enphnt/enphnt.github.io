import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ArticleListItem = ({ node, path }) => {
  const thumb = getImage(node.frontmatter.thumbnail);
  const styles = {
    article: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(8em, 1fr))",
      gridGap: "1em",
      maxWidth: "99%",
      padding: "0 1em 2em",
      justifyItems: "center",
    },
    tag: {
      padding: 4,
      margin: "4px",
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
    },
    blogFooterTags: {
      display: "flex",
      flexWrap: "wrap",
    },
    heading: {
      marginTop: 0,
    },
    thumbnail: {
      height: "10em",
      width: "10em",
      margin: "0.5em 1em",
    },
    info: {
      gridColumnEnd: "span 3"
    }
  };

  return (
    <article style={styles.article} key={node.id}>
      <div style={styles.thumbnail}>
        <Link id="nohighlight" aria-label={node.frontmatter.slug} key={node.frontmatter.slug} to={`/${path}/${node.frontmatter.slug}`}>
          <GatsbyImage
            image={thumb}
            alt={`Thumbnail for ${node.frontmatter.title}`}
          />
        </Link>
      </div>

      <div style={styles.info}>
        <Link id="nohighlight" aria-label={node.frontmatter.slug} key={node.frontmatter.slug} to={`/${path}/${node.frontmatter.slug}`}>
          <h2 style={styles.heading}>{node.frontmatter.title}</h2>
        </Link >

        <h5>{node.frontmatter.date}</h5>
        <p>{node.excerpt}</p>
        <div style={styles.blogFooterTags}>
          {
            node.frontmatter.tags.map(tag => (
              <Link key={tag} to={`/tags/${tag.replace(/ /g, "-")}/`} style={styles.tag}>
                {tag}
              </Link>
            ))
          }
        </div>
      </div>
    </article>

  );
};

export default ArticleListItem;