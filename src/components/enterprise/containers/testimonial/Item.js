import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Column, Columns } from 'bloomer';

import Paragraph from '../../../Typography/Paragraph';
import { TextOrange } from '../../../Typography/TextHelpers';
import H6 from '../../../Typography/H6';

import img1 from '../../../../assets/images/testimonial/left-box-blue.png';
import img2 from '../../../../assets/images/testimonial/right-box-blue.png';

const ripple3 = keyframes`
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const ripple2 = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

const ripple1 = keyframes`
  @keyframes ripple1 {
    0% {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      -webkit-transform: scale(2);
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const AnimationBackground = styled.div`
  bottom: -50px;
  left: -45px;
  -webkit-box-shadow: 0 15px 30px 0 #ddd;
  box-shadow: 0 15px 30px 0 #ddd;
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  opacity: 0.1;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  animation: ${ripple1} 3s linear infinite;
  & i:nth-child(2) {
    animation: ${ripple2} 3s linear infinite;
  }
  & i:nth-child(3) {
    animation: ${ripple3} 3s linear infinite;
  }
`;

const SubTitle = styled(Paragraph)`
  font-weight: 400;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
`;

const Title = styled(H6)`
  text-transform: capitalize;
  margin-bottom: 15px;
  font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
`;

const Description = styled(Paragraph)`
  overflow: hidden;
  padding: 1em 2.5em;
  line-height: 1.6;
`;

const Contenct = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 45px 15px;
  text-align: center;
  overflow: hidden;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 36px;
    height: 25px;
  }
  &:before {
    left: 15px;
    top: 15px;
    background: url(${img1}) no-repeat 0;
  }
  &:after {
    right: 15px;
    bottom: 15px;
    background: url(${img2}) no-repeat 0;
  }
`;

const Container = styled.div`
  padding: 0 15px;
  cursor: pointer;
  vertical-align: middle;
  @media (max-width: 767px) {
    padding: 25px;
  }
`;

const Item = ({ description, title, subtitle, image }) => (
  <Container>
    <Contenct>
      <AnimationBackground>
        <i></i>
        <i></i>
        <i></i>
      </AnimationBackground>
      <Columns isCentered>
        <Column />
        <Column isCentered>
          <img src={image.childImageSharp.fluid.src} />
        </Column>
        <Column />
      </Columns>
      <Description>{description}</Description>
      <Title>
        <TextOrange>{title}</TextOrange>
      </Title>
      <SubTitle>{subtitle}</SubTitle>
    </Contenct>
  </Container>
);

Item.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Item;
