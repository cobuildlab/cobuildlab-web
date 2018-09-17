import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
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
                  <Title isSize={1} hasTextColor="info">
                    {siteTitle}
                  </Title>
                  <Subtitle isSize={5}>
                    Ideas, advice, value and above all, entrepreneurship. Unique
                    content made as a guide for entrepreneurs that intend to
                    offer new opportunities in the Startup World.
                  </Subtitle>
                </Column>
              </Columns>
            </Container>
          </HeroBody>

          <HeroFooter>
            <Tabs isBoxed isFullWidth>
              <Container>
                <TabList>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>ALL</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>AI</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>CONCEPTS</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>EDUCATION</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>EVENTS</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>NEWS</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>SMALL BUSINESSES</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>STARTUPS IN MIAMI</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>TIPS</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>TOOLS</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>TRENDING TECHNOLOGIES</TabLink>
                  </Tab>
                  <Tab isActive={this.state.isActive} onClick={this.onClickNav}>
                    <TabLink>VIRTUAL REALITY</TabLink>
                  </Tab>
                </TabList>
              </Container>
            </Tabs>
          </HeroFooter>
        </Hero>

        <Container>
          <Columns>
            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <Column key={node.fields.slug} isSize="1/3">
                  <Link to={node.fields.slug}>
                    <Card>
                      <Tag isColor="success">Success</Tag>
                      <CardContent>
                        {title}
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
          }
        }
      }
    }
  }
`
