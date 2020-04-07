import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import H2 from '../Typography/H2';
import background from '../../resources/2020/home/background.svg';


const Title = styled(H2)`
  text-align: center;
  margin-bottom: 2em;
`;

const OverlayBackgroundContainer = styled.div`
  position: absolute;
  top: -40%;
  right: -40%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const SectionWrapper = styled.div`
  position: relative;
`;

const HomePagePortfolio = () => {

  return (
    <SectionWrapper>
      <OverlayBackgroundContainer>
        <img src={background} alt="b" />
      </OverlayBackgroundContainer>
      <Container isFluid className="container-full-width">
        <Title>Customer Success Stories</Title>
      </Container>
    </SectionWrapper>
  );
};

export default HomePagePortfolio;
