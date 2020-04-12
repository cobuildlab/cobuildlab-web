import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from './Card';
import data from '../../data/customer-success-stories-data';
import SubTitle from './DetailSubTitle';

const settings = {
  speed: 1500,
  infinite: true,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  draggable: false,
  slidesToShow: Array.isArray(data) && 4 < data.length ? 4 : 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        draggable: true,
      },
    },
  ],
};

const SliderContainer = styled.div`
  margin-top: 10em;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

const CardContainer = styled.div`
  height: 400px;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding-left: 4em;
  margin-bottom: 2em;
  @media screen and (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

const items = data.map(({ title, img, description, slug }) => (
  <CardContainer key={title}>
    <CardWrapper>
      <Card title={title} description={description} image={img} to={slug} />
    </CardWrapper>
  </CardContainer>
));

const DetailsOtherStories = () => (
  <SliderContainer>
    <TitleContainer>
      <SubTitle>Other stories that may interest you</SubTitle>
    </TitleContainer>
    <Slider {...settings}>{items}</Slider>
  </SliderContainer>
);

export default DetailsOtherStories;
