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

const SlidersEnviewStore = () => (
  <DetailCarousel>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/1.png'}
        alt={'enview store 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/2.png'}
        alt={'enview store 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/3.png'}
        alt={'enview store 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/4.png'}
        alt={'enview store 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/5.png'}
        alt={'enview store 5'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-store/slider/6.png'}
        alt={'enview store 6'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersEnviewStore;
