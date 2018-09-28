import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import defaultImg from '../resources/default-post.jpg'
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

class headerBlog extends React.Component {
  render() {
    const { activeTab, siteTitle, posts } = this.props
    return (
      <React.Fragment>
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
                <Tab isActive={activeTab === 'education'}>
                  <Link to="/blog/education">Education</Link>
                </Tab>
                <Tab isActive={activeTab === 'news'}>
                  <Link to="/blog/news">News</Link>
                </Tab>
                <Tab isActive={activeTab === 'small-business'}>
                  <Link to="/blog/small-business">Small Business</Link>
                </Tab>
                <Tab isActive={activeTab === 'miami'}>
                  <Link to="/blog/miami">Miami</Link>
                </Tab>
                <Tab isActive={activeTab === 'tools'}>
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
                    There's no posts in this category
                  </Title>
                </Column>
              )}
            </Columns>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}
export default headerBlog
