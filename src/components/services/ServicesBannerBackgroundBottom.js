import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';

const Overlay = styled.div`
  position: absolute;
  top: 55%;
  right: -35%;
  width: 60%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ServicesBannerBackgroundBottom = () => (
  <Overlay>
    <img src={background} alt="" />
  </Overlay>
);

export default ServicesBannerBackgroundBottom;
