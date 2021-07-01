import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../../components/2020/Layout';
import { Section, Container } from 'bloomer';
import BlogMetaTags from '../../components/blog-post/BlogMetaTags';
import BlogHero from '../../components/blog-post/BlogHero';
import BlogTag from '../../components/blog-post/BlogTag';
import BlogList from '../../components/blog-post/BlogList';
import BlogPostContainer from '../../components/blog-post/BlogPostContainer';
import Contact from '../../components/2020/HomePageContact';

const Blog = ({ data }) => {
  const posts = get(data, 'allMarkdownRemark.edges');
  return (
    <Layout>
      <BlogMetaTags />
      <BlogHero />
      <Section isPaddingless>
        <Container>
          <BlogTag activeTag="all" />
          <BlogPostContainer>
            <BlogList data={posts} />
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
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
