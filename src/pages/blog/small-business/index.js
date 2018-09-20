import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../../../components/layout'
import {
  Hero,
  HeroBody,
  Container,
  Title,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
  Subtitle,
  Columns,
  Column,
  Card,
  CardContent,
  Content,
  Tag,
} from 'bloomer'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  render() {
    const siteTitle = 'The Cobuild Blog for Entrepreneurs'
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />

        <Hero isColor="white" isSize="small">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title className="title-blog" isSize={1}>
                    {siteTitle}
                  </Title>
                  <Subtitle isSize={5}>
                    Ideas, advice, value and above all, entrepreneurship. <br />{' '}
                    Unique content made as a guide for entrepreneurs that intend
                    to offer new opportunities in the Startup World.
                  </Subtitle>
                  <br />
                  <hr />
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        <section className="section">
          <Container>
            <Tabs isBoxed isFullWidth>
              <TabList>
                <Tab>
                  <Link to="blog/education">Education</Link>
                </Tab>
                <Tab>
                  <Link to="blog/news">News</Link>
                </Tab>
                <Tab>
                  <Link to="blog/small-business">Small Business</Link>
                </Tab>
                <Tab>
                  <Link to="blog/miami">Miami</Link>
                </Tab>
                <Tab>
                  <Link to="blog/tools">Tools</Link>
                </Tab>
              </TabList>
            </Tabs>
            <Columns className="is-multiline">
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <Column key={node.fields.slug} isSize="1/3">
                    <Link to={node.fields.slug}>
                      <Card>
                        <Tag className="tag-category">
                          {node.frontmatter.category}
                        </Tag>
                        <CardContent>
                          {title}
                          <Img
                            sizes={node.frontmatter.image.childImageSharp.fluid}
                          />
                          <Content>
                            <small>{node.frontmatter.date}</small>
                          </Content>
                        </CardContent>
                      </Card>
                    </Link>
                  </Column>
                )
              })}
            </Columns>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 12
      filter: { frontmatter: { category: { eq: "Small Business" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
    }
  }
`
