import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H2 from '../Typography/H2';
import OurTeamMap from './OurTeamMap';
import LinkButtonDefault from '../2020/Button/LinkButtonDefault';

const TitleContainer = styled.div`
  margin: 0 0 3rem 0;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
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
          <LinkButtonDefault to="/team">Meet our Team</LinkButtonDefault>
        </ButtonContainer>
      </TitleContainer>
      <OurTeamMap />
      <div id="contact-us-anchor"></div>
    </Wrapper>
  </Container>
);

export default OurTeam;
