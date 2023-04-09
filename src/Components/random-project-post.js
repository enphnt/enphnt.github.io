import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RandomProject = () => {
  const styles = {
    footer: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      borderRadius: "10px",
    },
    footerLink: {
      textDecoration: "none",
      padding: 4
    },
    footerChosen: {
      margin: "16px",
    },
    footerImage: {
      height: "100%",
      paddingTop: 10,
      marginRight: 20,
    },
    footerImageWrap: {
      justifySelf: "center",
      height: "200px",
    },
    footerInfo: {
      marginLeft: "16px",
    },
    footerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "16px",
    },
    footerTags: {
      display: "flex",
      flexWrap: "wrap",
    },
    footerTag: {
      margin: "4px",
      padding: "4px",
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
    },
  };

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/projects/" } } }
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
    <div style={styles.footer}>
      <h3>
        <Link to={"/projects/"} style={styles.footerLink}>
          Check out other projects:
        </Link>
      </h3>
      <div style={styles.footerChosen}>
        <h2>
          <Link to={`/projects/${slug}`} style={styles.footerLink}>
            {title}
          </Link>
        </h2>
        <div style={styles.footerGrid}>
          <Link to={`/projects/${slug}`} id="nohighlight" style={styles.footerImageWrap}>
            <GatsbyImage image={image} alt={title} style={styles.footerImage} />
          </Link>
          <div>
            <h5>{date}</h5>
            <p>{excerpt}</p>
            <div style={styles.footerTags}>
              {tags.map(tag => (
                <Link key={tag} to={`/tags/${tag.replace(/ /g, "-")}/`} style={styles.footerTag}>
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

export default RandomProject;