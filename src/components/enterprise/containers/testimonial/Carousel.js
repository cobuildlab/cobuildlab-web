import React from 'react';
import Image from '../../components/image';
import Slider from 'react-slick';
import Typography from '../../../2020/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.scss';
import img1 from '../../../../assets/images/testimonial/andres-wegacha.jpeg';
import img2 from '../../../../assets/images/testimonial/ale.jpg';

const DATA = [
  {
    id: 1,
    title: 'Andres Aguerrevere',
    subtitle: 'Internal Dashboard Dev for Digital Marketing Agency',
    img: img1,
    content:
      'Cobuild Lab Inc performed admirably in every aspect of the engagement, delivering a high-quality final product. Communicative and dedicated, the team developed a good understanding of the project and exceeded expectations in terms of quality and work ethic.',
  },
  {
    id: 2,
    title: 'Alejandro Sanchez',
    subtitle: 'Jobs Marketplace Mobile App Dev for Hospitality Platform',
    img: img2,
    content:
      'Cobuild Lab Inc delivered the product and continues to provide support to facilitate the release of new versions. The team identifies platform challenges and provides solutions to build a high-quality final product. They offer cost-effective services, which leads to continued collaboration.',
  },
];

const CarouselSlider = () => {
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
          {DATA.map((data, index) => (
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
