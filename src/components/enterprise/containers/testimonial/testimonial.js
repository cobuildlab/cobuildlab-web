import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Description, Title } from '../../components/title';
import Image from '../../components/image';
import Slider from 'react-slick';
//TODO move this file to index
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.scss';

/**
 *
 */
function CarouselSlider() {
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
                <Description Class="testimonial-dec" Name={data.content} />
                <Title Class="testimonial-title" Name={data.title} />
                <Title Class="testimonial-subtitle" Name={data.subtitle} />
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
}

export default CarouselSlider;
