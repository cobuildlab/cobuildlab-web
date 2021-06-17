import React from 'react';
import PropTypes from 'prop-types';
import BlogPostCardContainer from './BlogPostCardContainer';
import BlogPostCardTitle from './BlogPostCardTitle';
import styled from 'styled-components';
import * as moment from 'moment';
import { DivTagStyled, TagStyled } from '../2021/services/customer-success-stories/styled';

const BlogPostContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
`;

const BlogPosition = styled.div`
  float: ${(props) => props.position};
  color: #264a60;
`;

const TagStyledBlogAi = styled(TagStyled)`
  height: 26px;
`;

const PostCard = ({ title, src, to, description, readingTime, createdAt, tag }) => (
  <BlogPostCardContainer alt={title} src={src} to={to}>
    <DivTagStyled>
      {tag.map((value, index) => (
        <TagStyledBlogAi key={index}>{value}</TagStyledBlogAi>
      ))}
    </DivTagStyled>

    <BlogPostCardTitle>{title}</BlogPostCardTitle>
    <div>
      <BlogPostContent>{description}</BlogPostContent>
    </div>
    <div>
      <BlogPosition position={'left'}>{moment(createdAt).format('MM/DD/YYYY')}</BlogPosition>
      <BlogPosition position={'right'}>{readingTime}</BlogPosition>
    </div>
  </BlogPostCardContainer>
);

PostCard.propTypes = {
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
  tag: PropTypes.array.isRequired,
};

export default PostCard;
