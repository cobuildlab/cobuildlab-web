import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import BlogPostCard from './BlogPostCard';

const BlogList = ({ data }) => {
  const items = data.map(({ node }) => (
    <Column key={node.frontmatter.title}>
      <BlogPostCard
        date={node.frontmatter.date}
        category={node.frontmatter.tags}
        to={node.fields.slug}
        src={node.frontmatter.image.childImageSharp.fixed}
        title={node.frontmatter.title}
      />
    </Column>
  ));

  return <Columns isMultiline>{items}</Columns>;
};

BlogList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BlogList;
