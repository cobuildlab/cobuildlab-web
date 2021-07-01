import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import NextArrow from './../NextArrow';
import PrevArrow from './../PrevArrow';

const Container = styled.div`
  position: relative;
  margin-top: 5em;
`;

const GrayBackground = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #707070;
  opacity: 0.58;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1223px;
  height: 100%;
  background-color: #f4f6fb;
  margin: auto;
`;

const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100px;
  padding-top: 3em;
  @media screen and (max-width: 768px) {
    padding-top: 1em;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-top: 2em;
  }
`;

const SliderWrapper = styled.div`
  max-width: 900px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  draggable: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        draggable: true,
        autoplay: true,
        speed: 2000,
        infinite: true,
      },
    },
  ],
};

const DetailCarousel = ({ children }) => {
  return (
    <Container>
      <GrayBackground />
      <Wrapper>
        <StaticImage
          src={'./../../../../assets/images/customers/carousel-laptop.png'}
          alt="carousel"
        />
        <SliderContainer>
          <SliderWrapper>
            <Slider {...settings}>{children}</Slider>
          </SliderWrapper>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

DetailCarousel.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DetailCarousel;
