import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';
import styled from 'styled-components';

const ImageContainer = styled.div`
  text-align: center;
  align-items: center;
  img {
    width: ${({ customWidth }) => (customWidth ? customWidth : '400px')} !important;
    height: auto !important;
    object-fit: contain !important;
  }
`;

const SlidersCamron = () => (
  <DetailCarousel>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/1.png'}
        alt={'Camron 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/2.png'}
        alt={'Camron 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/3.png'}
        alt={'Camron 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/4.png'}
        alt={'Camron 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/5.png'}
        alt={'Camron 5'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/camron/slider/6.png'}
        alt={'Camron 6'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersCamron;
