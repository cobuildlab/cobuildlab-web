import React from 'react';
import styled from 'styled-components';
import H4 from '../../Typography/H4';

const Container = styled.div`
  position: absolute;

  @media (max-width: 767.9px) {
    top: 10%;
    left: 12%;
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
    font-size: 38px;
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
