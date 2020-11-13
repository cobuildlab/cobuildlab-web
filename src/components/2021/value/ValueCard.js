import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 40px;
  @media all and (max-width: 767.99px) {
    padding: 15px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 479px;
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  left: ${({ left }) => left || '0'};
  right: ${({ right }) => right || '0'};
  @media all and (max-width: 767.99px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 2.5em;
  display: ${({ isLeft }) => (isLeft ? 'flex' : 'block')};
  flex-direction: column;
  align-items: flex-end;
`;

const ValueCard = ({ children, left, right, isLeft }) => (
  <Container>
    <Overlay left={left} right={right} />
    <Wrapper isLeft={isLeft}>{children}</Wrapper>
  </Container>
);

ValueCard.defaultProps = {
  isLeft: false,
};

ValueCard.propTypes = {
  isLeft: PropTypes.bool,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ValueCard;
