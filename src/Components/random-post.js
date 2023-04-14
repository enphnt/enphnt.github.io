import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import ArticleListItem from "./article-list-item";

const styles = {
  blogFooter: {
    margin: 16,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: 10,
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
    height: 200,
  },
  blogFooterInfo: {
    marginLeft: 16,
  },
  blogFooterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 16,
  },
  blogFooterTags: {
    display: "flex",
    flexWrap: "wrap",
  },
  blogFooterTag: {
    margin: 4,
    padding: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
};

const query = graphql`
  query {
    allMdx {
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
`;

const RandomBlog = () => {
  const [currentSlug, setCurrentSlug] = useState("");
  const [currentNode, setCurrentNode] = useState(null);
  const data = useStaticQuery(query);

  useEffect(() => {
    // Get the last part of the url without slashes
    const slug = window.location.href.split("/").filter(part => part).pop();
    setCurrentSlug(slug);
  }, []);

  useEffect(() => {
    // Find the node that matches the current slug
    const node = data.allMdx.nodes.find(node => node.frontmatter.slug === currentSlug);
    setCurrentNode(node);
  }, [currentSlug]);

  const { nodes } = data.allMdx;

  // Check if the current node exists and has tags
  if (currentNode && currentNode.frontmatter.tags) {
    // Filter so only nodes that share a tag with the current node and not current
    const taggedNodes = nodes.filter(node =>
      node.frontmatter.slug !== currentSlug &&
      node.frontmatter.tags.some(tag => currentNode.frontmatter.tags.includes(tag))
    );

    // Choose a random node from the tagged nodes every 10 mins, fallback if none
    const taggedNode = taggedNodes[Math.floor(new Date().getMinutes() / 10) % taggedNodes.length] || nodes[0];

    // Filter out nodes whose slug matches the current or tagged slug
    // and if current tags dont have music, show music posts, and vice versa
    const otherNodes = !currentNode.frontmatter.tags.includes("music") ?
      nodes.filter(node =>
        node.frontmatter.slug !== currentSlug &&
        node.frontmatter.slug !== taggedNode.frontmatter.slug &&
        node.frontmatter.tags.includes("music")) :
      nodes.filter(node =>
        node.frontmatter.slug !== currentSlug &&
        node.frontmatter.slug !== taggedNode.frontmatter.slug &&
        !node.frontmatter.tags.includes("music"));

    // Choose a random node from the remaining nodes every 10 mins, fallback if none
    const otherNode = otherNodes[Math.floor(new Date().getMinutes() / 10) % otherNodes.length] || nodes[1];

    return (
      <div style={styles.blogFooter}>
        <h3>
          <Link to={"/blog/"} style={styles.blogFooterLink}>
            Check out other articles:
          </Link>
        </h3>
        <h5>With tags: {currentNode.frontmatter.tags.join(", ")}</h5>
        <ArticleListItem node={taggedNode} />
        <h5>Maybe something else: </h5>
        <ArticleListItem node={otherNode} />
      </div>
    );
  } else {
    // If the current node does not exist or has no tags, return a loading message
    return (
      <div style={styles.blogFooter}>
        <h3>Loading...</h3>
      </div>
    );
  }
};

export default RandomBlog;