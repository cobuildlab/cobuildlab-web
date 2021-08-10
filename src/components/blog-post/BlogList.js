import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import BlogPostCard from './BlogPostCard';
import BlogTag from './BlogTag';

const BlogList = ({ data, activeTag }) => {
  let size = 4;
  if (data.length === 2) {
    size = 6;
  }
  const items = data.map(({ node }, i) => {
    return (
      <Column isSize={{ desktop: size, tablet: 6, mobile: 12 }} key={i}>
        <BlogPostCard
          date={node.frontmatter.date}
          category={node.frontmatter.tags || 'Blog Post'}
          to={node.fields.slug}
          src={node.frontmatter.image.childImageSharp}
          title={node.frontmatter.title}
        />
      </Column>
    );
  });

  return (
    <>
      <BlogTag activeTag={activeTag} />
      <Columns isMultiline>{items}</Columns>
    </>
  );
};

BlogList.propTypes = {
  data: PropTypes.array.isRequired,
  activeTag: PropTypes.string.isRequired,
};

export default BlogList;
