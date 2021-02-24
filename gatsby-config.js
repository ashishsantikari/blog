module.exports = {
  siteMetadata: {
    title: `Pretty Ideas`,
    author: `Ashish Santikari`,
    description: `A space for blogs. I write what I feel is necessary.`,
    siteUrl: `https://ashishsantikari.info`,
    social: {
      twitter: `ashishsantikari`,
      github: "ashishsantikari",
      linkedin: "ashishsantikari",
    },
  },
  plugins: [
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
      resolve: "gatsby-plugin-google-marketing-platform",
      options: {
        dataLayer: {
          gaPropertyId: process.env.GA_ANALYTICS_ID,
        },
        tagmanager: {
          id: process.env.GTM_ID,
        },
        optimize: {
          id: process.env.OPTIMIZE_ID,
          activateOn: "optimize.activate",
        },
        analytics: {
          id: process.env.GA_ANALYTICS_ID,
        },
      },
    },
    `gatsby-plugin-feed`,
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
    }
  ],
};
