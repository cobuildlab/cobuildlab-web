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

const SlidersArtPlay = () => (
  <DetailCarousel>
    <ImageContainer>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/1.jpg'}
        alt={'Art Play 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/2.jpg'}
        alt={'Art Play 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/3.jpg'}
        alt={'Art Play 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/4.jpg'}
        alt={'Art Play 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/5.jpg'}
        alt={'Art Play 5'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/6.png'}
        alt={'Art Play 6'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer customWidth={'900px'}>
      <StaticImage
        src={'./../../../../../assets/images/customers/art-play/slider/7.png'}
        alt={'Art Play 7'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersArtPlay;
