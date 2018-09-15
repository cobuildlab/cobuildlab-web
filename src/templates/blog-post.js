import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
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
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = 'Cobuild Lab'
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Hero isColor="black" isSize="medium">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title isSize={1} hasTextColor="white">
                    {post.frontmatter.title}
                  </Title>
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
            <Column hasTextAlign="centered">
              <Title isSize={3}>READ MORE</Title>
            </Column>
          </Columns>

          <Columns isCentered>
            {previous ? (
              <Column isSize="1/3">
                <Link to={previous.fields.slug} rel="prev">
                  <Card>
                    <Tag isColor="success">Success</Tag>
                    <CardContent>
                      ← {previous.frontmatter.title}
                      <Content>
                        {/* <small>{previous.frontmatter.date}</small> */}
                      </Content>
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
                    <Tag isColor="success">Success</Tag>
                    <CardContent>
                      {next.frontmatter.title} →
                      <Content>
                        {/* <small>{next.frontmatter.date}</small> */}
                      </Content>
                    </CardContent>
                  </Card>
                </Link>
              </Column>
            ) : (
              <div />
            )}
          </Columns>
        </Container>
      </React.Fragment>
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
      }
    }
  }
`
