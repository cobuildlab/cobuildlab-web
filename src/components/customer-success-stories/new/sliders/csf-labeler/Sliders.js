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

const SlidersCsfLabeler = () => (
  <DetailCarousel>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/csf-labeler/slider/1.jpg'}
        alt={'Csf Labeler 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/csf-labeler/slider/2.jpg'}
        alt={'Csf Labeler 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/csf-labeler/slider/3.jpg'}
        alt={'Csf Labeler 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/csf-labeler/slider/4.jpg'}
        alt={'Csf Labeler 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersCsfLabeler;
