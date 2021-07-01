import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
  transition: all 0.2s ease-out;
`;

const Container = styled(Link)`
  position: relative;
  display: block;
  width: 380px;
  height: 340px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 10px 20px #0000001a;
  &:hover ${Overlay} {
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1024px) {
    width: 318px;
    height: 286px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 200px;
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

const BlogPostCardContainer = ({ children, src, alt, to }) => (
  <Container to={to}>
    <Overlay />
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
