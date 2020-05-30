import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  position: absolute;
  top: -40px;
  left: 22px;
  background-color: #264a60;
  background-clip: padding-box;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
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

const OurTeamPopOver = () => (
  <Container>
    <Arrow />
    <Content>Maracaibo, Venezuela</Content>
  </Container>
);

export default OurTeamPopOver;
