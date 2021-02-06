import React from 'react';
import { Container } from 'bloomer';
import H2 from '../Typography/H2';
import { AlignCenter } from '../2021/text/TextHelpers';
import Carousel from '../enterprise/containers/testimonial/Carousel';
import styled from 'styled-components';

const TitleContainer = styled.div`
  margin-bottom: 4em;
  margin-top: 4em;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5em;
  }
`;

const TestimonialHomePage = () => {
  return (
    <Container isFluid>
      <TitleContainer>
        <AlignCenter>
          <H2>Testimonials</H2>
        </AlignCenter>
      </TitleContainer>
      <Carousel />
    </Container>
  );
};

export default TestimonialHomePage;
