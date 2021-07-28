import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../../components/2020/Layout';
import { Section, Container } from 'bloomer';
import BlogMetaTags from '../../components/blog-post/BlogMetaTags';
import BlogHero from '../../components/blog-post/BlogHero';
import BlogPostContainer from '../../components/blog-post/BlogPostContainer';
import Contact from '../../components/2020/HomePageContact';
import ClientSearch from '../../components/blog-ai/search/client-search';

const Blog = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges');

  const options = {
    indexStrategy: `Prefix match`,
    searchSanitizer: `Lower Case`,
    TitleIndex: true,
    SearchByTerm: true,
  };

  return (
    <Layout>
      <BlogMetaTags />
      <BlogHero />
      <Section isPaddingless>
        <Container>
          <BlogPostContainer>
            <ClientSearch post={posts} engine={options} activeTag="all" />
          </BlogPostContainer>
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
