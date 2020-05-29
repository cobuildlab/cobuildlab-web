import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H2 from '../../Typography/H2';
import OurTeamMap from './OurTeamMap';

const TitleContainer = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
`;

const OurTeam = () => (
  <Container>
    <TitleContainer>
      <H2>Our Team</H2>
    </TitleContainer>
    <OurTeamMap />
  </Container>
);

export default OurTeam;
