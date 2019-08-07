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
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          console.log(`DEBUG: gatsby-node: processing:`, post)
          createPage({
            path: post.node.fields.slug,
            component: path.resolve(
              `src/templates/${String(post.node.frontmatter.template)}.js`,
            ),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
      }),
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
