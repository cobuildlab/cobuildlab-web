import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';

const Overlay = styled.div`
  position: absolute;
  top: 15%;
  left: -25%;
  width: 90%;
  height: 60%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ServicesBannerBackgroundTop = () => (
  <Overlay>
    <img src={background} alt="" />
  </Overlay>
);

export default ServicesBannerBackgroundTop;
