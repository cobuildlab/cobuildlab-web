import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H2 from '../Typography/H2';
import OurTeamMap from './OurTeamMap';
import LinkButtonDefault from '../2020/Button/LinkButtonDefault';

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

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const OurTeam = () => (
  <Container id="our-team">
    <Wrapper>
      <TitleContainer>
        <H2>Our Team</H2>
        <ButtonContainer>
          <LinkButtonDefault to="/team">See all our team</LinkButtonDefault>
        </ButtonContainer>
      </TitleContainer>
      <OurTeamMap />
    </Wrapper>
  </Container>
);

export default OurTeam;
