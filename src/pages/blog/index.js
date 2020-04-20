import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import {
  Hero,
  HeroHeader,
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
} from 'bloomer';
import { Icon } from 'react-icons-kit';
import { clockO } from 'react-icons-kit/fa/clockO';
import 'bulma';
import Styled from 'styled-components';

const StyledSubtitle = Styled(Subtitle)`
  color: #254a61 !important; 
`;


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  render() {
    const siteTitle = 'The Blog for Software Entrepreneurs';
    // const siteDescription = get(this, 'props.data.site.siteMetadata.description');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'The Blog for Software Entrepreneurs of Miami' }]}
          title={siteTitle}
        />

        <Hero isSize="small">
          <HeroHeader>
            <Header />
          </HeroHeader>
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title className="title-blog" isSize={1}>
                    {siteTitle}
                  </Title>
                  <StyledSubtitle isSize={5}>
                    Ideas, advice, value and above all, entrepreneurship. <br /> Unique content made
                    as a guide for entrepreneurs that intend to offer new opportunities in the
                    Startup World.
                  </StyledSubtitle>
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
                const backgroundSrc = node.frontmatter.image.childImageSharp.fluid.src;
                const title = get(node, 'frontmatter.title') || node.fields.slug;
                // const image =
                //   get(node, 'frontmatter.image.publicURL') || defaultImg
                const splitTags = node.frontmatter.tags
                  ? node.frontmatter.tags.split(', ')
                  : undefined;
                return (
                  <Column key={node.fields.slug} isSize="1/3">
                    <Link to={node.fields.slug}>
                      <Card className="card-p">
                        <CardContent
                          className="card-post"
                          style={{
                            backgroundImage: `url(${backgroundSrc})`,
                          }}
                        />
                        <Content className="title-post">
                          <small>
                            {' '}
                            <Icon icon={clockO} style={{ paddingTop: 5 }} /> {node.frontmatter.date}
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
                              );
                            })
                            : null}
                        </Content>
                      </Card>
                    </Link>
                  </Column>
                );
              })}
            </Columns>
          </Container>
        </section>
      </Layout>
    );
  }
}

export default Blog;

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
      limit: 1000
      filter: {fileAbsolutePath: {regex: "/(pages/blog)/.*\\.md$/"}}
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
                fluid(maxWidth: 380) {
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
`;
