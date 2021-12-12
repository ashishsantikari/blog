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
          include: /assets/
        }
      }
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
          agentID: `199627503`,
          licenseKey: `NRJS-54517fd196531ab967d`,
          applicationID: `199627503`,
          beacon: `bam.eu01.nr-data.net`,
          errorBeacon: `bam.eu01.nr-data.net`,
        }
      }
    }
  ],
};
