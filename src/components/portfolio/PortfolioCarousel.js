import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 3em;
`;

const PortfolioCarousel = ({ children }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          draggable: true,
          autoplay: true,
          speed: 2000,
          infinite: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
};

PortfolioCarousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const CarouselItem = styled.div`
  padding: 1.5em;
  transition: all 0.2s linear;
  height: 600px;
  .slick-current & {
    padding: 0;
  }

  & > img {
    width: auto;
    height: 100%;
    margin: auto;
  }
`;

export default PortfolioCarousel;
