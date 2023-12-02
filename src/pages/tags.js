import React from "react";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <div>
      <h1>Tags</h1>
      <p>Click tags to discover related content.</p>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;

export const Head = ({ location }) => <Seo title="Tags" location={location} />;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(limit: 2000) {
    group(field: { frontmatter: { tags: SELECT }}) {
      fieldValue
      totalCount
    }
  }
}
`;