import React from 'react';
import { Container, Section } from 'bloomer';
import Image from '../../components/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './brands.scss';
import logo1 from '../../../../assets/images/logos/8base-logo.png';
import logo2 from '../../../../assets/images/logos/aws-logo.png';
import logo3 from '../../../../assets/images/logos/gc-logo.png';
import logo4 from '../../../../assets/images/logos/js-logo.png';
import logo5 from '../../../../assets/images/logos/nodejs-logo.png';
import logo6 from '../../../../assets/images/logos/python-logo.png';
import logo7 from '../../../../assets/images/logos/react-logo.png';

/**
 *
 */
function Brand() {
  const BRANDS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Section isPaddingless>
      <div className="brand-slider">
        <div className="enterprise-section">
          <Container>
            <Slider {...settings}>
              {BRANDS.map((logo, i) => (
                <div className="brand-item" key={i}>
                  <div className="brand-content">
                    <Image Path={logo} />
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
      </div>
    </Section>
  );
}

export default Brand;
