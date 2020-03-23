import React from 'react';
import { Container } from 'bloomer';
import Slider from 'react-slick';
import Typography from '@2020/components/Typography';
import styles from './css/index.module.scss';
import './css/index.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

console.log(styles);

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
  className: styles.carousel,
  centerMode: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        className: styles.carousel,
        centerMode: true,
        variableWidth: false,
        adaptiveHeight: true,
      },
    },
  ],
};

const Item = () => (
  <div style={{ width: '100%', height: 385, display: 'flex', alignItems: 'center' }}>
    <div
      className="item"
      style={{ width: '100%', height: '80%', backgroundColor: '#264A60', margin: 'auto' }}></div>
  </div>
);

const CustomerSuccessStories = () => {
  return (
    <Container isFluid>
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
