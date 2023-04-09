import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import ArticleListItem from "../article-list-item";

const RandomBlog = ({ data, to }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    const url = window.location.href.match(/\/([^\/]+)\/?$/);
    setCurrentUrl("");

    setCurrentUrl(url[url.length - 1]);
  }, []);

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

  const { nodes } = data.allMdx;

  // Filter out nodes whose slug matches the current slug
  const filteredNodes = nodes.filter(node => node.frontmatter.slug !== currentUrl);

  // Choose a random node from the filtered nodes every 10 mins, fallback if none
  const node = filteredNodes[Math.floor(new Date().getMinutes() / 10) % filteredNodes.length] || nodes[0];

  const { frontmatter } = node;

  return (
    <div style={styles.blogFooter}>
      <h3>
        <Link to={to} style={styles.blogFooterLink}>
          Check out other {to === "/blog/" ? "articles" : "projects"}:
        </Link>
      </h3>
      <ArticleListItem node={node} path={to.replace(/\//g, "")} />
    </div>
  );
};

export default RandomBlog;