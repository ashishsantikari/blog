const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const legalDocs = path.resolve(`./src/templates/legal-docs.js`);
  const blogPostResults = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            fields: {
              slug: { nin: ["/terms-of-use/", "/privacy-policy/"] }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (blogPostResults.errors) {
    throw blogPostResults.errors;
  }

  const legalDocsResults = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            fields: {
              slug: { in: ["/terms-of-use/", "/privacy-policy/"] }
            }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (legalDocsResults.error) {
    throw legalDocs.error;
  }

  // Create blog posts pages.
  const posts = blogPostResults.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
      trailingSlash: false,
    });
  });
  // create legal docs page
  const legalDocuments = legalDocsResults.data.allMarkdownRemark.edges;

  legalDocuments.forEach((legalDoc) => {
    createPage({
      path: legalDoc.node.fields.slug,
      component: legalDocs,
      context: {
        slug: legalDoc.node.fields.slug,
      },
      trailingSlash: false,
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
