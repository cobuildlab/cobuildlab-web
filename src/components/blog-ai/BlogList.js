import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import BlogPostCard from './BlogPostCard';
import image from './../../pages/blog/media/ai/pexels-george-morina-4960464.jpg';

const BlogList = ({ data }) => {
  let size = 4;
  if (data.length === 2) {
    size = 6;
  }
  const items = data.map((node) => (
    <Column isSize={{ desktop: size, tablet: 6, mobile: 12 }} key={node.title}>
      <BlogPostCard
        to={node.slug}
        src={image}
        title={node.title}
        description={node.description}
        readingTime={node.readingTime}
        createdAt={node.createdAt}
        tag={node.tag}
      />
    </Column>
  ));

  return <Columns isMultiline>{items}</Columns>;
};

BlogList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BlogList;
