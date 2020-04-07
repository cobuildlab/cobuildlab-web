import React from 'react';
import styled, { keyframes } from 'styled-components';
// import Img from "gatsby-image"
import Image from '../../components/image';
import ContactBackgroundImages from '../../../../data/contact';
// background animation required this

import img1 from '../../../../assets/images/contact/animation/1-blue.png';
import img2 from '../../../../assets/images/contact/animation/2-blue.png';
import img3 from '../../../../assets/images/contact/animation/4-blue.png';
import img4 from '../../../../assets/images/contact/animation/5-blue.png';


const animationFrameOne = keyframes`
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    -webkit-transform: translate(73px, -1px) rotate(36deg);
    transform: translate(73px, -1px) rotate(36deg);
  }
  40% {
    -webkit-transform: translate(141px, 72px) rotate(72deg);
    transform: translate(141px, 72px) rotate(72deg);
  }
  60% {
    -webkit-transform: translate(83px, 122px) rotate(108deg);
    transform: translate(83px, 122px) rotate(108deg);
  }
  80% {
    -webkit-transform: translate(-40px, 72px) rotate(144deg);
    transform: translate(-40px, 72px) rotate(144deg);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
`;

const animationFrameTwo = keyframes`
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
    transform: translate(0px, 0px) rotate(0deg) scale(1);
  }
  20% {
    -webkit-transform: translate(200px, -1px) rotate(36deg) scale(0.7);
    transform: translate(200px, -1px) rotate(36deg) scale(0.7);
  }
  40% {
    -webkit-transform: translate(251px, 140px) rotate(72deg) scale(0.6);
    transform: translate(251px, 140px) rotate(72deg) scale(0.6);
  }
  60% {
    -webkit-transform: translate(141px, 250px) rotate(108deg) scale(0.7);
    transform: translate(141px, 250px) rotate(108deg) scale(0.7);
  }
  80% {
    -webkit-transform: translate(-40px, 100px) rotate(144deg) scale(0.8);
    transform: translate(-40px, 100px) rotate(144deg) scale(0.8);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
    transform: translate(0px, 0px) rotate(0deg) scale(1);
  }
`;

const AnimationBase = styled.div`
  position: absolute;
  filter: opacity(0);
`;

const Item1 = styled(AnimationBase)`
  left: 3%;
  animation: ${animationFrameOne} 15s infinite linear;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Item2 = styled(AnimationBase)`
  bottom: 10%;
  left: 3%;
  animation: ${animationFrameTwo} 13s infinite linear;
  @media screen and (max-width: 768px){
    display: none;
  }
`;


const Item3 = styled(AnimationBase)`
  left: 35.5%;
  top: 25%;
  animation: ${animationFrameOne} 15s infinite linear;
  @media screen and (max-width: 768px){
    display: none;
  }
`;


const Item4 = styled(AnimationBase)`
  right: 13%;
  top: 5%;
  animation: ${animationFrameTwo} 14s infinite linear;
  @media screen and (max-width: 768px){
    display: none;
  }
`;


const AnimationBackground = () => (
  <>
    <Item1>
      <Image Path={img1} />
    </Item1>
    <Item2>
      <Image Path={img2} />
    </Item2>
    <Item3>
      <Image Path={img3} />
    </Item3>
    <Item4>
      <Image Path={img4} />
    </Item4>
  </>
);

export default AnimationBackground;

