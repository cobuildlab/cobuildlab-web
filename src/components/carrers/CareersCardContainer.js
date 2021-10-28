import React from 'react';
import PropTypes from 'prop-types';
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

const Container = styled.div`
  position: relative;
  display: block;
  height: 180px;
  border-radius: 5px;
  overflow: hidden;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 10px 20px #0000001a;
  @media screen and (max-width: 1024px) {
    width: 244px;
    height: 280px;
  }
  @media screen and (max-width: 925px) {
    width: 210px;
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

const CareersCardContainer = ({ children }) => (
  <Container>
    <Overlay />
    <ChildrenContainer>{children}</ChildrenContainer>
  </Container>
);

CareersCardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CareersCardContainer;
