import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PopOverContainer = styled.div`
  width: 200px;
  position: absolute;
  top: -31px;
  left: 27px;
  background-color: #264a60;
  background-clip: padding-box;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  opacity: 0;
  transition: all 0.15s ease-in;
  min-height: 20px;
  min-width: 15px;
  transform: scale(0);
  @media screen and (max-width: 768px) {
    top: -40px;
    left: 18px;
  }
`;

const Container = styled.div`
  cursor: pointer;
  &:hover ${PopOverContainer} {
    opacity: 1;
    transform: scale(1);
  }
`;

const Arrow = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -6.7px;
  left: -10px;
  display: block;
  width: 2px;
  height: 2px;
  background: 0 0;
  border-width: 3px;
  border-style: solid;
  border-width: 10.242641px;
  border-right-color: #264a60;
  border-top-color: transparent;
  border-bottom-color: #264a60;
  border-left-color: transparent;
  transform: rotate(-37deg);
`;

const Content = styled.div`
  color: #fff;
  padding: 0.05rem 0.5em;
`;

const OurTeamPopOver = ({ children, text }) => (
  <Container>
    <PopOverContainer>
      <Arrow />
      <Content>{text}</Content>
    </PopOverContainer>
    {children}
  </Container>
);

OurTeamPopOver.defaultProps = {
  text: ' ',
};

OurTeamPopOver.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  text: PropTypes.string,
};

export default OurTeamPopOver;
