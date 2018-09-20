import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const image = '../blog/hello-world/salty_egg.jpg'
    const siteTitle = 'Cobuild Lab'
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Hero isColor="primary" isSize="medium">
          <HeroBody className="bg-post" style={{backgroundImage: `url(../${image})`}}>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="white">
                    {post.frontmatter.title}
                  </Title>
                  <br/>
                  <hr/>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>

        <Container>
          <Columns isCentered>
            <Column
              hasTextAlign="centered"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Columns>
          <Columns isCentered>
            <Column>
              <Img sizes={post.frontmatter.image.childImageSharp.fluid} />
            </Column>
          </Columns>

          <Columns isCentered>
            <Column hasTextAlign="centered">
              <Title isSize={3}>READ MORE</Title>
            </Column>
          </Columns>

          <Columns isCentered>
            {previous ? (
              <Column isSize="1/3">
                <Link to={previous.fields.slug} rel="prev">
                  <Card>
                    <Tag className="tag-category">{previous.frontmatter.category}</Tag>
                    <CardContent>
                      ← {previous.frontmatter.title}
                      <Content>
                        {/* <small>{previous.frontmatter.date}</small> */}
                      </Content>
                      <Img
                        sizes={previous.frontmatter.image.childImageSharp.fluid}
                      />
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
                  <Card>
                    <Tag isColor="success">{next.frontmatter.category}</Tag>
                    <CardContent>
                      {next.frontmatter.title} →
                      <Content>
                        {/* <small>{next.frontmatter.date}</small> */}
                      </Content>
                      <Img
                        sizes={next.frontmatter.image.childImageSharp.fluid}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </Column>
            ) : (
              <div />
            )}
          </Columns>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        category
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
`
