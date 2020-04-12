import React from 'react';
import { Container, Section } from 'bloomer';
import Image from '../../components/enterprise/components/image';
import Slider from 'react-slick';
import '../enterprise/containers/brands/brands.scss';
import logoAngular from '../../assets/images/logos/logoAngularJS.png';
import logoBS from '../../assets/images/logos/logoBS.png';
import logoDjango from '../../assets/images/logos/logoDjango.png';
import logoHtmlCSS from '../../assets/images/logos/logoHtmlCSS.png';
import logoNodeJs from '../../assets/images/logos/logoNodeJs.png';
import logoPython from '../../assets/images/logos/logoPython.png';

/**
 * Stack Component.
 *
 * @returns {*} - The Brand Component.
 * @class
 */
function Stack() {
  const BRANDS = [logoAngular, logoBS, logoDjango, logoHtmlCSS, logoNodeJs, logoPython];
  const settings = {
    autoplaySpeed: 3000,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Section isPaddingless>
      <div className="brand-slider">
        <div className="enterprise-section" style={{ paddingTop: 0 }}>
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

export { Stack };
