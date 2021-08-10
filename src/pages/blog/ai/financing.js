import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Section, Container } from 'bloomer';
import Layout from './../../../components/2020/Layout';
import BlogMetaTags from './../../../components/blog-post/BlogMetaTags';
import BlogHero from './../../../components/blog-post/BlogHero';
import Contact from './../../../components/2020/HomePageContact';
import ClientSearch from '../../../components/blog-ai/search/client-search';

const Financing = ({ data }) => {
  const { post } = data.allPost8Base;

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
      <Section>
        <Container>
          <ClientSearch post={post} engine={options} />
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

Financing.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query {
    allPost8Base(
      limit: 20
      filter: { category: { regex: "/financing/" } }
      sort: { fields: createdAt, order: DESC }
    ) {
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

export default Financing;
