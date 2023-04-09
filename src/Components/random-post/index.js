import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RandomBlog = ({ data, to }) => {
  const styles = {
    blogFooter: {
      margin: "16px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      borderRadius: "10px",
    },
    blogFooterLink: {
      textDecoration: "none",
      padding: 4
    },
    blogFooterImage: {
      height: "90%",
      paddingTop: 10,
      marginRight: 20,
    },
    blogFooterImageWrap: {
      justifySelf: "center",
      height: "200px",
    },
    blogFooterInfo: {
      marginLeft: "16px",
    },
    blogFooterGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "16px",
    },
    blogFooterTags: {
      display: "flex",
      flexWrap: "wrap",
    },
    blogFooterTag: {
      margin: "4px",
      padding: "4px",
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
    },
  };

  // Destructure the chosen post data
  const { nodes } = data.allMdx;
  const { excerpt, frontmatter } = nodes[Math.floor(new Date().getMinutes() / 10) % nodes.length];
  const { date, title, slug, tags, thumbnail } = frontmatter;
  const image = getImage(thumbnail);

  return (
    <div style={styles.blogFooter}>
      <h3>
        <Link to={to} style={styles.blogFooterLink}>
          Check out other {to === "/blog/" ? "articles" : "projects"}:
        </Link>
      </h3>
      <h2>
        <Link to={`${to}${slug}`} style={styles.blogFooterLink}>
          {title}
        </Link>
      </h2>
      <div style={styles.blogFooterGrid}>
        <Link to={`${to}${slug}`} id="nohighlight" style={styles.blogFooterImageWrap}>
          <GatsbyImage image={image} alt={title} style={styles.blogFooterImage} />
        </Link>
        <div>
          <h5>{date}</h5>
          <p>{excerpt}</p>
          <div style={styles.blogFooterTags}>
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${tag.replace(/ /g, "-")}/`} style={styles.blogFooterTag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomBlog;