import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import ArticleListItem from '../../components/article-list-item';

const ProjectsPage = ({ data }) => {
  const list = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Layout>
      <div style={list}>
        <h1>Projects</h1>
        <p>
          Here is a list of projects that I have discovered, been
          involved with or built from scratch myself. I also have
          a <Link aria-label="Blog" to="/blog/">blog</Link> section
          of the site, too.
        </p>
        {
          data.allMdx.nodes.map(node =>
            <ArticleListItem key={node.id} node={node} path={"projects"} />
          )
        }
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/projects/"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        excerpt(pruneLength: 180)
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

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;