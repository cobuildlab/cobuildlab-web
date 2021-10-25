import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';

const Overlay = styled.div`
  position: absolute;
  top: 7%;
  left: -16%;
  width: 70%;
  height: 70%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BannerBackgroundStories = () => (
  <Overlay>
    <img src={background} alt="" />
  </Overlay>
);

export default BannerBackgroundStories;
