import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../../components/image';
import Slider from 'react-slick';
import Typography from '../../../2020/Typography';
import './testimonial.scss';
//TODO move this file to index
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSlider = () => {
  const TestimonialList = useStaticQuery(graphql`
    query TestimonialQuery {
      allDataJson {
        edges {
          node {
            testimonial {
              content
              id
              img
              subtitle
              title
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="testimonial-slider">
      <div className="testimonial-outer-box">
        <Slider {...settings}>
          {TestimonialList.allDataJson.edges[0].node.testimonial.map((data, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-content">
                <div className="animated-bg">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <Typography className="testimonial-dec" tag="p">
                  {data.content}
                </Typography>
                <Typography className="testimonial-title" tag="p">
                  {data.title}
                </Typography>
                <Typography className="testimonial-subtitle" tag="p">
                  {data.subtitle}
                </Typography>
                <div className="testimonial-images">
                  <Image Path={data.img} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSlider;
