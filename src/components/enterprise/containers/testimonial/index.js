import React from 'react';
import { Container, Section } from 'bloomer';
import CarouselSlider from './testimonial';
import Typography from '../../../2020/Typography';
import './testimonial.scss';


const Testimonial = () => {
  return (
    <Section isPaddingless>
      <div className="testimonial-wrapper gradient-color" id="testimonial">
        <div className="enterprise-section">
          <Container isFluid>
            <div className="main-title-wrapper">
              <div className="sub-title-wrapper">
                <Typography className="site-subtitle gradient-color" tag="h2" >
                  testimonial
                </Typography>
              </div>
              <Typography className="sitemain-subtitle" tag="h3">
                Clients<span className="enterprise-text-orange sub-title">Feedback</span>
              </Typography>
              <Typography className="site-dec" tag="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
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
