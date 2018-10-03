const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    template
                    tags
                    image {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 480) {
                          aspectRatio
                          base64
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          /* const validTags = [
            'Education',
            'Miami',
            'News',
            'Small Business',
            'Tools',
          ]

          // If template is blog and tags are not null
          if (
            post.node.frontmatter.template === 'blog' &&
            post.node.frontmatter.tags
          ) {
            // Split the tags of the posts, if the tag is valid then create the page
            const splitTags = post.node.frontmatter.tags.split(',')

            splitTags.forEach(tag => {
              if (validTags.includes(tag)) {
                createPage({
                  path: post.node.fields.slug,
                  component: path.resolve(`src/templates/blog.js`),
                  context: {
                    slug: post.node.fields.slug,
                    previous,
                    next,
                  },
                })
              }

              // The tag is not valid
              console.log('invalid tag')
            })
          } */

          //If the post is not from the blog or the Tags are empty
          createPage({
            path: post.node.fields.slug,
            component: path.resolve(
              `src/templates/${String(post.node.frontmatter.template)}.js`
            ),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
