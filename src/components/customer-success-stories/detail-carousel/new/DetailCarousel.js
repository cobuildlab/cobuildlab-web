import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';
import NextArrow from './../NextArrow';
import PrevArrow from './../PrevArrow';

const Container = styled.div`
  position: relative;
  margin-top: 5em;
`;

const GrayBackground = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: #707070;
  opacity: 0.58;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1100px;
  height: 100%;
  background-color: #f4f6fb;
  margin: auto;
`;

const SliderContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100px;
`;

const SliderWrapper = styled.div`
  max-width: 1000px;
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
