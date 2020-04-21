import React from 'react';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import img from '../../assets/images/portfolio/details/title.png';


const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
`;

const Title = styled(H1)`
  font-size: 150px;
`;

const HeroTitle = () => (
  <Container>
    <Title>Portfolio</Title>
    <Image src={img} alt="portfolio content" />
  </Container>
);


export default HeroTitle;
