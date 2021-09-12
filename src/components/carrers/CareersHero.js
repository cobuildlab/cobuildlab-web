import React from 'react';
import Header from '../header/Header';
import { Hero, HeroHeader, HeroBody, Container, Columns, Column } from 'bloomer';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import Image from '../2020/Image';
import img from './../../assets/images/sentado_con_laptop.svg';

const Title = styled(H1)`
  position: relative;
  margin-top: 120px;
  padding-top: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    padding-top: 1rem;
  }
`;

const CareersHero = () => (
  <Hero isSize="small">
    <HeroHeader>
      <Header />
    </HeroHeader>
    <HeroBody>
      <Container hasTextAlign="centered">
        <Columns isCentered>
          <Column isSize={{ mobile: 12, desktop: 6 }}>
            <Title>Join Our Team </Title>
          </Column>
          <Column isSize={{ desktop: 6 }} isHidden="mobile">
            <Image src={img} alt="contact form" />
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
);

export default CareersHero;
