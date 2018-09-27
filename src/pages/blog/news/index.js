import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../../../components/layout'
import defaultImg from '../../../resources/default-post.jpg'
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
import { Icon } from 'react-icons-kit'
import { clockO } from 'react-icons-kit/fa/clockO'

class EducationIndex extends React.Component {
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
                  <Link to="/blog">All</Link>
                </Tab>
                <Tab>
                  <Link to="/blog/education">Education</Link>
                </Tab>
                <Tab isActive>
                  <Link to="/blog/news">News</Link>
                </Tab>
                <Tab>
                  <Link to="/blog/small-business">Small Business</Link>
                </Tab>
                <Tab>
                  <Link to="/blog/miami">Miami</Link>
                </Tab>
                <Tab>
                  <Link to="/blog/tools">Tools</Link>
                </Tab>
              </TabList>
            </Tabs>
            <Columns className="is-multiline">
              {posts ? (
                posts.map(({ node }) => {
                  const title =
                    get(node, 'frontmatter.title') || node.fields.slug
                  const image =
                    get(node, 'frontmatter.image.publicURL') || defaultImg
                  return (
                    <Column key={node.fields.slug} isSize="1/3">
                      <Link to={node.fields.slug}>
                        <Card className="card-p">
                          <CardContent
                            className="card-post"
                            style={{
                              backgroundImage: `url(${image})`,
                            }}
                          />
                          <Content className="title-post">
                            <small>
                              {' '}
                              <Icon
                                icon={clockO}
                                style={{ paddingTop: 5 }}
                              />{' '}
                              {node.frontmatter.date}
                            </small>
                            <Subtitle hasTextColor="white">{title}</Subtitle>
                          </Content>
                          {node.frontmatter.category ? (
                            <Tag className="tag-category">
                              {node.frontmatter.category}
                            </Tag>
                          ) : null}
                        </Card>
                      </Link>
                    </Column>
                  )
                })
              ) : (
                <Column hasTextAlign="centered">
                  <Title isSize={3} tag="h3">
                    There's no posts in these category
                  </Title>
                </Column>
              )}
            </Columns>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default EducationIndex

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
      filter: { frontmatter: { category: { eq: "News" } }, fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"} }
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
