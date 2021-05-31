import React from 'react';
import PropTypes from 'prop-types';
import BlogPostCardContainer from './BlogPostCardContainer';
import BlogPostCardTitle from './BlogPostCardTitle';

const PostCard = ({ title, src, to }) => (
  <BlogPostCardContainer alt={title} src={src} to={to}>
    <BlogPostCardTitle>{title}</BlogPostCardTitle>
  </BlogPostCardContainer>
);

PostCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
};

export default PostCard;
