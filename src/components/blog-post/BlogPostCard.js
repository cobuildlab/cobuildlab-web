import React from 'react';
import PropTypes from 'prop-types';
import BlogPostCardContainer from './BlogPostCardContainer';
import BlogPostCardHeader from './BlogPostCardHeader';
import BlogPostCardTitle from './BlogPostCardTitle';

const PostCard = ({ src, title, to, date, category }) => (
  <BlogPostCardContainer alt={title} src={src} to={to}>
    <BlogPostCardHeader category={category} />
    <BlogPostCardTitle>{title}</BlogPostCardTitle>
  </BlogPostCardContainer>
);

PostCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostCard;
