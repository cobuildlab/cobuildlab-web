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
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

const OurTeam = () => (
  <Container>
    <Wrapper>
      <TitleContainer>
        <H2>Our Team</H2>
      </TitleContainer>
      <OurTeamMap />
    </Wrapper>
  </Container>
);

export default OurTeam;
