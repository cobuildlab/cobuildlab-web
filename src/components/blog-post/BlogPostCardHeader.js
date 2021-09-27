import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogPostCategory from './BlogPostCategory';

const Container = styled.span`
  display: flex;
  justify-content: space-between;
`;

const BlogPostCardHeader = ({ category }) => (
  <Container>
    <BlogPostCategory category={category} />
  </Container>
);

BlogPostCardHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default BlogPostCardHeader;
