import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

class LegalDocs extends React.Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </Layout>
    );
  }
}

export default LegalDocs;

export const pageQuery = graphql`
  query PrivacyPolicyBy($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
