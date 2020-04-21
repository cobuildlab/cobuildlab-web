import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 3em;
`;

const PortfolioCarousel = ({ children }) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
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


  return (
    <Container>
      <Slider {...settings} >
        {children}    
      </Slider>
    </Container>
  );

};

export const CarouselItem = styled.div`
  padding: 1.5em;
  transition: all .2s linear;
  .slick-current &{
    padding: 0;
  }
`;

export default PortfolioCarousel;
