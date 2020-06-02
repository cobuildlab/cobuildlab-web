import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'bloomer';
import styled from 'styled-components';

const Container = styled(Tag)`
  background-color: #e76c29 !important;
  color: #fff !important;
  font-weight: bold;
`;

const BlogPostCardDate = ({ category }) => <Container>{category}</Container>;

BlogPostCardDate.propTypes = {
  category: PropTypes.string.isRequired,
};

export default BlogPostCardDate;
