import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const BlogPostCardTitle = ({ children }) => <Container>{children}</Container>;

BlogPostCardTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default BlogPostCardTitle;
