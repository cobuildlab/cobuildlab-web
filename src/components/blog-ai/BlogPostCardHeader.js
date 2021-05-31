import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogPostCategory from './BlogPostCategory';
import BlogPostCardDate from './BlogPostCardDate';

const Container = styled.span`
  display: flex;
  justify-content: space-between;
`;

const BlogPostCardHeader = ({ date, category }) => (
  <Container>
    <BlogPostCardDate date={date} />
    <BlogPostCategory category={category} />
  </Container>
);

BlogPostCardHeader.propTypes = {
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BlogPostCardHeader;
