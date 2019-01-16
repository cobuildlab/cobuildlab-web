import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import defaultImg from '../../resources/default-post.jpg'
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Tabs,
  TabList,
  Tab,
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
import 'bulma'
import '../../assets/fonts/Lato-Black.ttf'
import '../../assets/fonts/Lato-BlackItalic.ttf'
import '../../assets/fonts/Lato-Bold.ttf'
import '../../assets/fonts/Lato-BoldItalic.ttf'
import '../../assets/fonts/Lato-Hairline.ttf'
import '../../assets/fonts/Lato-HairlineItalic.ttf'
import '../../assets/fonts/Lato-Italic.ttf'
import '../../assets/fonts/Lato-Light.ttf'
import '../../assets/fonts/Lato-LightItalic.ttf'
import '../../assets/fonts/Lato-Regular.ttf'

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
        <section className="section-blog">
          <Container>
            <Tabs isBoxed isFullWidth>
              <TabList>
                <Tab>
                  <Link to="/blog/education">Education</Link>
                </Tab>
                <Tab>
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
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const image =
                  get(node, 'frontmatter.image.publicURL') || defaultImg
                const splitTags = node.frontmatter.tags
                  ? node.frontmatter.tags.split(', ')
                  : undefined
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
                        <Content className="tag-content">
                          {splitTags && splitTags.length > 0
                            ? splitTags.map((tag, index) => {
                                return (
                                  <p className="p-content" key={index}>
                                    <Tag className="tag-category">{tag}</Tag>
                                  </p>
                                )
                              })
                            : null}
                        </Content>
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
      limit: 100
      filter: {fileAbsolutePath: {regex: "/pages/blog/.*\\.md$/"}}
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
            tags
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 720) {
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
