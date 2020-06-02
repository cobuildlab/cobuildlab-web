import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 10;
  transition: all 0.2s ease-out;
`;

const Container = styled(Link)`
  position: relative;
  display: block;
  width: 400px;
  height: 290px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  &:hover ${Overlay} {
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    height: 180px;
  }
`;

const ChildrenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Images = styled(Img)`
  width: 100%;
  height: 100%;
`;

const BlogPostCardContainer = ({ children, src, alt, to }) => (
  <Container to={to}>
    <Overlay />
    <Images fixed={src} alt={alt} />
    <ChildrenContainer>{children}</ChildrenContainer>
  </Container>
);

BlogPostCardContainer.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default BlogPostCardContainer;
