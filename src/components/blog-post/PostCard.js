import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import H6 from '../Typography/H6';
import Paragraph from '../Typography/Paragraph';

const Contaner = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
`;

const Redirect = styled(Link)`
  display: block;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2) !important;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostData = styled.div`
  background-color: #264a60;
  color: #fff;
  padding: 0.2em 1em;
  display: flex;
  justify-content: space-between;
`;

const PostDate = styled.span`
  font-weight: lighter;
`;

const PostTag = styled.span`
  font-weight: lighter;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 1em;
`;

const Title = styled(H6)`
  text-align: center;
  margin-bottom: 1em;
  font-size: 18px;
  font-weight: bold;
  linea-height: 1.5;
`;

const Description = styled(Paragraph)`
  font-size: 16px;
  linea-height: 1.5;
`;

const PostCard = ({ src, alt, title, description, to, date, tag }) => (
  <Contaner>
    <Redirect to={to}>
      <ThumbnailContainer>
        <Thumbnail src={src} alt={alt} />
        <PostData>
          <PostDate>{date}</PostDate>
          <PostTag>{tag}</PostTag>
        </PostData>
      </ThumbnailContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Redirect>
  </Contaner>
);

PostCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default PostCard;
