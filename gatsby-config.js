require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Cobuild Lab | Software development in Miami, Florida',
    seoTitle: 'Software development in Miami, Florida', // site title  ouput --> Cobuild Lab | Software development in Miami, Florida
    author: '@cobuildlab',
    description: 'Software development in Miami, Florida',
    siteUrl: process.env.URL,
    twitterHandle: '@cobuildlab',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-zopfli',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/2021/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-component',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cobuild Lab`,
        short_name: `Cobuild`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e76c29`,
        display: `minimal-ui`,
        icon: `src/resources/icocobuildlab.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://4geeks.us5.list-manage.com/subscribe/post?u=05c88e36fa1e947ec0bf94453&amp;id=02c69b216a', // see instructions section below
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-PFDRR5V',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: require.resolve(`./../gatsby-source-8base`),
      options: {
        url: process.env.URL_8BASE,
        apiToken: process.env.TOKEN_8BASE_API,
        workspaceId: process.env.WORKSPACE_ID_8BASE,
        graphqlQuery: `
          query{
            postsList {
              items{
                id
                title
                content
                slug
                tag
                description
                category
                createdAt
                readingTime
                imageUrl{
                  items{
                    filename
                    downloadUrl
                    createdAt
                  }
                }
              }
              count
            }
            careersList {
              items {
                id
                title
                description
                profits
                jobProfile
                jobDescription
                modality
                time
                active
                createdAt
              }
            }
          }
        `,
      },
    },
  ],
};
