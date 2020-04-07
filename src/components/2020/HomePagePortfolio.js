import React from 'react';
import { Container } from 'bloomer';
import Slider from 'react-slick';
import styled from 'styled-components';
import H2 from '../Typography/H2';
import background from '../../resources/2020/home/background.svg';
import CustomerSuccessStoriesCard from './CustomerSuccessStoriesCard';
import data from '../../data/customer/customer-success-stories';


const settings = {
  className: 'customer-success-stories-carousel',
  touchMove: true,
  centerMode: true,
  infinite: true,
  autoplay: true, //TODO set this true when finish
  slidesToShow: 3,
  speed: 2500,
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 0,
        speed: 1000,
        autoplay: false,
        touchMove: true,
      },
    },
  ],
};

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

const CarouselItemContainer = styled.div`
  width: 375px;
  height: 450px;
  display: flex;
  align-items: center;
`;

const CarouselItem = styled.div`
  width: 100%;
  height: 375px;
`;

const HomePagePortfolio = () => {

  const items = data.map((e, index) => (
    <div  key={e.title}>
      <CarouselItemContainer>
        <CarouselItem>
          <CustomerSuccessStoriesCard title={e.title} description={e.description} image={e.image} />
        </CarouselItem>
      </CarouselItemContainer>
    </div>
  ));

  return (
    <SectionWrapper>
      <OverlayBackgroundContainer>
        <img src={background} alt="b" />
      </OverlayBackgroundContainer>
      <Container isFluid className="container-full-width">
        <Title>Customer Success Stories</Title>
        <Slider {...settings}>{items}</Slider>
      </Container>
    </SectionWrapper>
  );
};

export default HomePagePortfolio;
