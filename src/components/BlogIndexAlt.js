import React, { Component } from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import defaultImg from '../resources/default-post.jpg';
import Header from './2020/Header/Header';
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
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledTabs = Styled(Tabs)`
  & ul li.is-active a {
    background-color: transparent !important;
  }
`;

class HeaderBlog extends Component {
  render() {
    const { activeTab, siteTitle, posts } = this.props;
    return (
      <React.Fragment>
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
                  <Subtitle isSize={5}>
                    Ideas, advice, value and above all, entrepreneurship. <br /> Unique content made
                    as a guide for entrepreneurs that intend to offer new opportunities in the
                    Startup World.
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
            <StyledTabs isBoxed isFullWidth>
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
            </StyledTabs>
            <Columns className="is-multiline">
              {posts ? (
                posts.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.fields.slug;
                  const image = get(node, 'frontmatter.image.publicURL') || defaultImg;
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
                              backgroundImage: `url(${image})`,
                            }}
                          />
                          <Content className="title-post">
                            <small>
                              {' '}
                              <Icon icon={clockO} style={{ paddingTop: 5 }} />{' '}
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
                                );
                              })
                              : null}
                          </Content>
                        </Card>
                      </Link>
                    </Column>
                  );
                })
              ) : (
                <Column hasTextAlign="centered">
                  <Title isSize={3} tag="h3">
                    There&rsquo;s no posts in this category
                  </Title>
                </Column>
              )}
            </Columns>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

HeaderBlog.propTypes = {
  activeTab: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
};

export default HeaderBlog;
