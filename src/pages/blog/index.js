import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/header/Header';
import {
  Hero,
  HeroHeader,
  HeroBody,
  Container,
  Tabs,
  TabList,
  Tab,
  Subtitle,
  Columns,
  Column,
  Section,
} from 'bloomer';
import H1 from '../../components/Typography/H1';
import SeoMetaTags from '../../components/SeoMetaTags';
import BlogList from '../../components/blog-post/BlogList';
import styled from 'styled-components';

const StyledSubtitle = styled(Subtitle)`
  color: #254a61 !important;
`;

const TagContainer = styled.div`
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogSectionWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const Blog = ({ data }) => {
  const siteTitle = 'The Blog for Software Entrepreneurs';
  const description = 'The Blog for Software Entrepreneurs of Miami';
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Layout>
      <SeoMetaTags title={siteTitle} description={description} />
      <Hero isSize="small">
        <HeroHeader>
          <Header />
        </HeroHeader>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Columns isCentered>
              <Column>
                <H1>{siteTitle}</H1>
                <StyledSubtitle isSize={5}>
                  Ideas, advice, value and above all, entrepreneurship. <br /> Unique content made
                  as a guide for entrepreneurs that intend to offer new opportunities in the Startup
                  World.
                </StyledSubtitle>
                <br />
                <hr />
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
      <Section isPaddingless>
        <Container>
          <TagContainer>
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
          </TagContainer>
          <BlogSectionWrapper>
            <BlogList data={posts} />
          </BlogSectionWrapper>
        </Container>
      </Section>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

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
                fixed(width: 400, height: 290) {
                  srcWebp
                  srcSetWebp
                  aspectRatio
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
