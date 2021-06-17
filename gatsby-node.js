const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  let promise1 = new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
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
      ).then((result) => {
        if (result.errors) {
          return reject(result.errors);
        }
        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: path.resolve(`src/templates/${String(post.node.frontmatter.template)}.js`),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
          // AMP
          createPage({
            path: `${post.node.fields.slug}amp/`,
            component: path.resolve(
              `src/templates/${String(post.node.frontmatter.template)}.amp.js`,
            ),
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });
      }),
    );
  });

  let promise2 = new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query BasePost {
            allPost8Base {
              post: nodes {
                id
                title
                slug
                content
                description
                tag
                readingTime
                createdAt
                imageUrl {
                  items {
                    filename
                    downloadUrl
                    createdAt
                  }
                }
                fields {
                  images {
                    remoteImage {
                      publicURL
                      url
                    }
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          return reject(result.errors);
        }
        // Create blog posts pages AI.
        const posts = result.data.allPost8Base.post;
        _.each(posts, (post, index) => {
          //Convert Markdown to html
          unified()
            .use(markdown)
            .use(html)
            .process(post.content, function (err, file) {
              if (err) throw err;
              post.content = String(file);
              createPage({
                path: `/blog/ai/${post.slug}`,
                component: path.resolve(`./src/templates/blog-ai.js`),
                context: {
                  post,
                },
              });
            });
        });
      }),
    );
  });
  return Promise.all([promise1, promise2]);
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
