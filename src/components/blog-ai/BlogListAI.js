import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import BlogPostCard from './BlogPostCard';
import image from './../../pages/blog/media/ai/pexels-george-morina-4960464.jpg';

const BlogListAI = ({ data }) => {
  const items = data.map((node) => (
    <Column isSize={{ desktop: 4, tablet: 6, mobile: 12 }} key={node.title}>
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

BlogListAI.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BlogListAI;
