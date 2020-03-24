import React from 'react';
import { Container } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title';
import CarouselSlider from './testimonial';
import './testimonial.scss';

/**
 *
 */
function Testimonial() {
  return (
    <section className="testimonial-wrapper gradient-color" id="testimonial">
      <Container>
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
    </section>
  );
}

export default Testimonial;
