import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RandomBlog = () => {
  const styles = {
    blogFooter: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      borderRadius: "10px",
    },
    blogFooterLink: {
      textDecoration: "none",
      padding: 4
    },
    blogFooterChosen: {
      margin: "16px",
    },
    blogFooterImage: {
      height: "100%",
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

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/blog/" } } }
      ) {
        nodes {
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `);

  // Destructure the chosen post data
  const { nodes } = data.allMdx;
  const { excerpt, frontmatter } = nodes[Math.floor(new Date().getMinutes() / 10) % nodes.length];
  const { date, title, slug, tags, thumbnail } = frontmatter;
  const image = getImage(thumbnail);

  return (
    <div style={styles.blogFooter}>
      <h3>
        <Link to={"/blog/"} style={styles.blogFooterLink}>
          Check out other articles:
        </Link>
      </h3>
      <div style={styles.blogFooterChosen}>
        <h2>
          <Link to={`/blog/${slug}`} style={styles.blogFooterLink}>
            {title}
          </Link>
        </h2>
        <div style={styles.blogFooterGrid}>
          <Link to={`/blog/${slug}`} id="nohighlight" style={styles.blogFooterImageWrap}>
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
    </div>
  );
};

export default RandomBlog;