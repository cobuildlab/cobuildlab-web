import React from 'react';
import { Container, Section } from 'bloomer';
import CarouselSlider from './Carousel';
import Typography from '../../../2020/Typography';
import './testimonial.scss';
import styled from 'styled-components';
import H2 from '../../../Typography/H2';

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
            <CarouselSlider />
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
