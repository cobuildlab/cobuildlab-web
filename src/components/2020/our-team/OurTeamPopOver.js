import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  position: absolute;
  top: -33px;
  left: 10px;
  background-color: #264a60;
  background-clip: padding-box;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

const Arrow = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -7px;
  left: 3px;
  display: block;
  width: 5px;
  height: 5px;
  background: 0 0;
  border-width: 3px;
  border-style: solid;
  border-width: 7.242641px;
  border-right-color: #264a60;
  border-top-color: transparent;
  border-bottom-color: #264a60;
  border-left-color: transparent;
  -ms-transform: rotate(45deg);
  -ms-transform: rotate(-46deg);
  transform: rotate(46deg);
`;

const Content = styled.div`
  color: #fff;
  padding: 0 0.5em;
`;

const OurTeamPopOver = () => (
  <Container>
    <Arrow />
    <Content>Maracaibo, Venezuela</Content>
  </Container>
);

export default OurTeamPopOver;
