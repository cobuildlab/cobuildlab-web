import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import CarouselSlider from './testimonial';
import './testimonial.scss';


const Testimonial = () => {
  return (
    <Section isPaddingless>
      <div className="testimonial-wrapper gradient-color" id="testimonial">
        <div className="enterprise-section">
          <Container isFluid>
            <div className="main-title-wrapper">
              <Subtitle Class="site-subtitle gradient-color" Name="testimonial" />
              <Titlespan2 Class="sitemain-subtitle" Name="Clients" Label="Feedback" />
              <Description
                Class="site-dec"
                Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
              />
            </div>
            <CarouselSlider />
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
