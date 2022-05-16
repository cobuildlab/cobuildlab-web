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

const SlidersEnviewCloud = () => (
  <DetailCarousel>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/1.png'}
        alt={'enview cloud 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/2.png'}
        alt={'enview cloud 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/3.png'}
        alt={'enview cloud 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/4.png'}
        alt={'enview cloud 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/5.png'}
        alt={'enview cloud 5'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/6.png'}
        alt={'enview cloud 6'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/7.png'}
        alt={'enview cloud 7'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/enview-cloud/slider/8.png'}
        alt={'enview cloud 8'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersEnviewCloud;
