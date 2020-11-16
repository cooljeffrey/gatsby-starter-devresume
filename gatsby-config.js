module.exports = {
  siteMetadata: {
    title: `Gatsby Starter DevResume`,
    description: `Gatsby Starter DevResume - Bootstrap 4 Resume/CV Template For Software Developers`,
    author: `@cooljeffrey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-devresume`, // Change this to your desired name
        short_name: `devresume`, // Change this to your desired name
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#54B689`,
        display: `minimal-ui`,
        icon: `static/assets/images/resume-profile.png`, // This path is relative to the root of the site.
        legacy: true,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./static/assets/images/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     workboxConfig: {
    //       globPatterns: ["**/icon-path*"],
    //     },
    //   },
    // },
  ],
};
