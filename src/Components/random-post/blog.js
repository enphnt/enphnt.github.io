import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import RandomPost from "./";

const query = graphql`
  query {
    allMdx(filter: { internal: { contentFilePath: { regex: "/blog/" } } }) {
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
  // use the useStaticQuery hook to execute the query and get the data
  const data = useStaticQuery(query);

  return (
    <RandomPost data={data} to="/blog/" />
  );
};

export default RandomBlog;