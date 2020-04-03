import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';

const Overlay = styled.div`
  position: absolute;
  top: 15%;
  left: -35%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const BannerBackground = () => (
  <Overlay>
    <img src={background} alt="" />
  </Overlay>
);


export default BannerBackground;