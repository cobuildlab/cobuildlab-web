import React from 'react';
import styled from 'styled-components';
import { Container } from 'bloomer';
import H2 from '../Typography/H2';
import CustomerSuccessStories from '../CustomerSuccessStories/CustomerSuccessStories';
import background from '../../resources/2020/home/background.svg';

const Wrapper = styled.div`
  position: relative;
`;

const Titlte = styled(H2)`
  text-align: center;
  margin-bottom: 1.5em;
`;

const OverlayBackground = styled.div`
  position: absolute;
  top: -25%;
  right: -40%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HomePageCustomerSuccessStories = () => (
  <Wrapper>
    <OverlayBackground>
      <img src={background} alt="b" />
    </OverlayBackground>
    <Container>
      <Titlte>Customer Success Stories</Titlte>
      <CustomerSuccessStories />
    </Container>
  </Wrapper>
);

export default HomePageCustomerSuccessStories;
