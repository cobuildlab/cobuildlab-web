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
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-whatshelp',
      options: {
        // facebook: 'xxx', // Facebook page ID
        whatsapp: '+17869913467', // WhatsApp number
        email: 'contact@cbuildlab.com', // Email
        call: '+17869913467', // Call phone number
        company_logo_url: 'https://www.cobuildlab.com/favicon-32x32.png', // URL of company logo (png, jpg, gif)
        greeting_message: 'Hello, how can we help?', // Text of greeting message
        call_to_action: 'Chat with Us', // Call to action
        button_color: '#b02030', // Color of button
        position: 'right', // Position may be 'right' or 'left'
        order: 'whatsapp,call,email', // Order of buttons
        ga: true, // Google Analytics enabled
        branding: false, // Show branding string
        mobile: true, // Mobile version enabled
        desktop: true, // Desktop version enabled
        greeting: true, // Greeting message enabled
        shift_vertical: 0, // Vertical position, px
        shift_horizontal: 0, // Horizontal position, px
        domain: 'cobuildlab.com', // site domain
        key: 'xxx', // pro-widget key
      },
    },
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
      resolve: `gatsby-plugin-brotli`,
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
        level: 4,
      },
    },
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
      resolve: `@cobuildlab/gatsby-source-8base`,
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
                requirements
                jobProfile
                responsibilities
                modality
                time
                active
                slug
                type
                createdAt
              }
            }
          }
        `,
      },
    },
  ],
};
