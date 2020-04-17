import React from 'react';
import { Container, Section } from 'bloomer';
import styled from 'styled-components';
import H2 from '../../../Typography/H2';
import H4 from '../../../Typography/H4';
import { TextOrange, AlignCenter } from '../../../Typography/TextHelpers';
import Carousel from './Carousel';

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: calc(20px + 30 * (100vw - 320px) / 1600);
`;

const Testimonial = () => {
  return (
    <Section isPaddingless id={'testimonials'}>
      <div className="testimonial-wrapper gradient-color" id="testimonial">
        <div className="enterprise-section">
          <Container isFluid>
            <Wrapper>
              <Title>Testimonials</Title>
              <H4>
                <AlignCenter>
                  Clients<TextOrange>Feedback</TextOrange>
                </AlignCenter>
              </H4>
            </Wrapper>
            <Carousel />
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
