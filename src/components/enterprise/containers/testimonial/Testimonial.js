import React from 'react';
import { Container, Section } from 'bloomer';
import Slider from 'react-slick';
import Typography from '../../../2020/Typography';
import styled from 'styled-components';
import H2 from '../../../Typography/H2';
import TestimonialItem from './TestimonialItem';
import img1 from '../../../../assets/images/testimonial/andres-wegacha.jpeg';
import img2 from '../../../../assets/images/testimonial/ale.jpg';
import './testimonial.scss';

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

const Title = styled(H2)`
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
  margin-bottom: calc(15px + (25 - 15) * ((100vw - 320px) / (1920 - 320)));
  display: inline-block;
  vertical-align: middle;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 7px 30px 5px;
  background-color: #d2dfe6;
  font-weight: 400;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Testimonial = () => {
  return (
    <Section isPaddingless id={'testimonials'}>
      <div className="testimonial-wrapper gradient-color" id="testimonial">
        <div className="enterprise-section">
          <Container isFluid>
            <div className="main-title-wrapper">
              <Title>Testimonals</Title>
              <Typography className="sitemain-subtitle" tag="h3">
                Clients<span className="enterprise-text-orange sub-title">Feedback</span>
              </Typography>
            </div>
            <div className="testimonial-slider">
              <div className="testimonial-outer-box">
                <Slider {...settings}>
                  {DATA.map((data, index) => (
                    <TestimonialItem
                      key={data.title}
                      title={data.title}
                      subtitle={data.subtitle}
                      description={data.content}
                      img={data.img}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
