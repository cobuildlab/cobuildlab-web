import React from 'react';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import img from '../../assets/images/portfolio/details/title.png';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeroTitle = () => (
  <Container>
    <H1>Portfolio</H1>
    <Image src={img} alt="portfolio content" />
  </Container>
);

export default HeroTitle;
