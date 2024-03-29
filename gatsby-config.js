module.exports = {
  siteMetadata: {
    title: `Pretty Ideas`,
    author: `Ashish Santikari`,
    description: `A space for blogs. I write what I feel is necessary.`,
    siteUrl: `https://blog.ashishsantikari.info`,
    social: {
      twitter: `ashishsantikari`,
      github: "ashishsantikari",
      linkedin: "ashishsantikari",
    },
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/legal`,
        name: `legal`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  // https://markshust.com/2020/06/25/fixing-images-in-gatsby-rss-feeds/
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html.replace(
                        /(?<=\"|\s)\/static\//g,
                        `${site.siteMetadata.siteUrl}\/static\/`
                      ),
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {slug: {nin: ["/terms-of-use/", "/privacy-policy/"]}}}) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Pretty Ideas",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pretty Ideas | Ashish Santikari`,
        short_name: `Pretty Ideas`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff5700`,
        display: `minimal-ui`,
        icon: `content/assets/lightbulb.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-newrelic`,
      options: {
        configs: {
          instrumentationType: `proAndSPA`,
          accountId: `3176369`,
          trustKey: `3176369`,
          agentID: `322545016`,
          licenseKey: `NRJS-54517fd196531ab967d`,
          applicationID: `322545016`,
          beacon: `bam.eu01.nr-data.net`,
          errorBeacon: `bam.eu01.nr-data.net`,
        },
      },
    },
  ],
};
