import React from 'react';
import { Container } from 'bloomer';
import Slider from 'react-slick';
import Typography from '@2020/components/Typography';
import './css/index.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

const settings = {
  className: 'customer-success-stories-carousel',
  centerMode: true,
  // infinite: true,
  // autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  speed: 2500,
  variableWidth: true,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 0,
        speed: 500,
        // adaptiveHeight: true,
      },
    },
  ],
};

const Item = () => (
  <div style={{ width: '100%', height: 385, display: 'flex', alignItems: 'center' }}>
    <div
      className="carousel-item"
      style={{ width: '100%', height: '80%', backgroundColor: '#264A60', margin: 'auto' }}></div>
  </div>
);

const CustomerSuccessStories = () => {
  return (
    <Container isFluid className="container-not-margin">
      <div className="section-title">
        <Typography tag="h2" size={title} hasTextAlign="centered">
          Customer Success Stories
        </Typography>
      </div>
      <Slider {...settings}>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
        <div style={{ width: 300 }}>
          <Item />
        </div>
      </Slider>
    </Container>
  );
};

export default CustomerSuccessStories;
