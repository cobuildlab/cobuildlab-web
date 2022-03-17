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

const SlidersFisherman = () => (
  <DetailCarousel>
    <ImageContainer customWidth={1920}>
      <StaticImage
        src={'./../../../../../assets/images/customers/fisherman/slider/1.jpg'}
        alt={'Fisherman 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={1920}>
      <StaticImage
        src={'./../../../../../assets/images/customers/fisherman/slider/2.jpg'}
        alt={'Fisherman 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={1920}>
      <StaticImage
        src={'./../../../../../assets/images/customers/fisherman/slider/3.jpg'}
        alt={'Fisherman 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={1920}>
      <StaticImage
        src={'./../../../../../assets/images/customers/fisherman/slider/4.jpg'}
        alt={'Fisherman 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersFisherman;
