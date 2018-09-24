import React from 'react'
import Helmet from 'react-helmet'
import LayoutPost from '../components/layoutPost'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'
import Share from '../components/Share'
import Img from 'gatsby-image'
import get from 'lodash/get'
import rehypeReact from 'rehype-react'
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Columns,
  Column,
  Card,
  CardContent,
  Content,
  Tag,
} from 'bloomer'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    title: Title,
    columns: Columns,
    column: Column,
  },
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const twitterHandle = get(
      this.props,
      'data.site.siteMetadata.twitterHandle'
    )
    const disqusShortname = 'cobuildlab'
    const disqusConfig = { identifier: post.id, title: post.frontmatter.title }
    const slug = post.fields.slug
    const url = get(this.props, 'data.site.siteMetadata.siteUrl')
    const siteTitle = 'Cobuild Lab'
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <LayoutPost>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Hero isColor="black" isSize="medium">
          <HeroBody
            className="bg-post"
            style={{
              backgroundImage: `url(${post.frontmatter.image.publicURL})`,
            }}
          >
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="white">
                    {post.frontmatter.title}
                  </Title>
                  <br />
                  <hr />
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>

        <section className="section">
          <Container>
            <Columns isCentered>
              <Column
                hasTextAlign="left"
                // dangerouslySetInnerHTML={{ __html: post.html }}
              >
                {renderAst(post.htmlAst)}
              </Column>
            </Columns>
            <Columns isCentered>
              <Column>
                <Img sizes={post.frontmatter.image.childImageSharp.fluid} />
              </Column>
            </Columns>

            <Columns style={{ marginTop: 30 }} isCentered>
              <Column hasTextAlign="centered">
                <Title isSize={4}>READ MORE</Title>
              </Column>
            </Columns>

            <Columns isCentered>
              {previous ? (
                <Column isSize="1/3">
                  <Link to={previous.fields.slug} rel="prev">
                    <Card className="card-p">
                      <Tag className="tag-category">
                        {previous.frontmatter.category}
                      </Tag>
                      <CardContent
                        className="card-post"
                        style={{
                          backgroundImage: `url(${
                            previous.frontmatter.image.publicURL
                          })`,
                        }}
                      >
                        ← {previous.frontmatter.title}
                      </CardContent>
                    </Card>
                  </Link>
                </Column>
              ) : (
                <div />
              )}

              {next ? (
                <Column isSize="1/3">
                  <Link to={next.fields.slug} rel="next">
                    <Card className="card-p">
                      <Tag className="tag-category">
                        {next.frontmatter.category}
                      </Tag>
                      <CardContent
                        className="card-post"
                        style={{
                          backgroundImage: `url(${
                            next.frontmatter.image.publicURL
                          })`,
                        }}
                      >
                        {next.frontmatter.title} →
                      </CardContent>
                    </Card>
                  </Link>
                </Column>
              ) : (
                <div />
              )}
            </Columns>
          </Container>
          <Share
            socialConfig={{
              twitterHandle,
              config: {
                url: `${url}${slug}`,
                title: `${siteTitle}`,
              },
            }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </section>
      </LayoutPost>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
        twitterHandle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        category
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
