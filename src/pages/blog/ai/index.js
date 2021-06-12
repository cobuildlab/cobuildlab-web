import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../../components/2020/Layout';
import { Section, Container, Columns } from 'bloomer';
import BlogMetaTags from '../../../components/blog-ai/BlogMetaTags';
import BlogHero from '../../../components/blog-ai/BlogHero';
import BlogList from '../../../components/blog-ai/BlogList';
import Contact from '../../../components/2020/HomePageContact';

const Blog = ({ data }) => {
  console.log(data);
  const { post } = data.allPost8Base;
  return (
    <Layout>
      <BlogMetaTags />
      <BlogHero />
      <Section isPaddingless>
        <Container>
          <Columns isMultiline>
            <BlogList data={post} />
          </Columns>
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
  query BasePost {
    allPost8Base {
      post: nodes {
        id
        title
        slug
        content
        description
        tag
        readingTime
        createdAt
      }
    }
  }
`;

export default Blog;
