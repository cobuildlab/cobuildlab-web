import React from 'react';
import styled from 'styled-components';
import H4 from '../Typography/H4';

const Container = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 767.9px) {
    top: 10%;
    left: 12%;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
  }
  @media (min-width: 768px) {
    top: 63%;
    left: 45%;
  }
  @media (min-width: 1200px) {
    top: 59%;
    left: 44%;
  }
`;

const Title = styled(H4)`
  line-height: 1.3;
  letter-spacing: 2px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 767.9px) {
    font-size: 20px;
  }
`;

const OurTeamMapTitle = () => (
  <Container>
    <Title>
      Our Partners and
      <br />
      Customers go all around
      <br />
      the World
    </Title>
  </Container>
);

export default OurTeamMapTitle;
