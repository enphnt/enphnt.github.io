import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            caption
            timestamp
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }`
  );

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    node: {
      height: 300,
      width: 300,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      alignItems: "center",
      margin: 2,
    },
    title: {
      textAlign: "center",
      margin: 16,
    },
    overlay: {
      background: "transparent"
    }
  };

  return (
    <div style={styles.title}>
      <h1>Instagram Posts</h1>
      <div style={styles.container}>
        {
          data.allInstaNode.edges.map(({ node }) => (
            <a href={`https://www.instagram.com/p/${node.id}/`}>
              <div key={node.id} style={styles.node}>
                <GatsbyImage
                  image={node.localFile.childImageSharp.gatsbyImageData}
                  alt={node.caption || "instagram post"}
                />
                <div style={styles.overlay}>
                  <p>{node.caption}</p>
                  <sup>{new Date(node.timestamp * 1000).toLocaleString()}</sup>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Instagram;