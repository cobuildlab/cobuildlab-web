import React from 'react';
import Header from '../header/Header';
import { Hero, HeroHeader, HeroBody, Container, Columns, Column } from 'bloomer';
import styled from 'styled-components';
import H3 from '../Typography/H3';
import Image from '../2020/Image';
import img from './../../assets/images/sentado_con_laptop.svg';

const Title = styled(H3)`
  width: 100%;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 35px;
    padding-top: 1rem;
    text-align: center;
  }
`;

const CareersHero = () => (
  <Hero isSize="small">
    <HeroHeader>
      <Header />
    </HeroHeader>
    <HeroBody>
      <Container hasTextAlign="left">
        <Columns isCentered style={{ alignItems: 'center' }}>
          <Column isSize={{ mobile: 12, desktop: 8 }}>
            <Title>we have many opportunities for you!</Title>
          </Column>
          <Column isSize={{ mobile: 6, desktop: 4 }} isHidden="mobile">
            <Image src={img} alt="contact form" height={'372'} width={'458'} />
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
);

export default CareersHero;
