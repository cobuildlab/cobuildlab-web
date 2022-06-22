import React from 'react';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const ImageContainer = styled.div`
  text-align: center;
  align-items: center;
  img {
    width: ${({ customWidth }) => (customWidth ? customWidth : '400px')} !important;
    height: auto !important;
    object-fit: contain !important;
  }
`;

const SlidersAwakenFlow = () => (
  <DetailCarousel>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/0.png`}
        alt={'Awaken Flow 0'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/1.png`}
        alt={'Awaken Flow 1'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/2.png`}
        alt={'Awaken Flow 2'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/3.png`}
        alt={'Awaken Flow 3'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/4.png`}
        alt={'Awaken Flow 4'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/5.png`}
        alt={'Awaken Flow 5'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/6.png`}
        alt={'Awaken Flow 6'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/7.png`}
        alt={'Awaken Flow 7'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/8.png`}
        alt={'Awaken Flow 8'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/9.png`}
        alt={'Awaken Flow 9'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/10.png`}
        alt={'Awaken Flow 10'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/11.png`}
        alt={'Awaken Flow 11'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/12.png`}
        alt={'Awaken Flow 12'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/13.png`}
        alt={'Awaken Flow 13'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/14.png`}
        alt={'Awaken Flow 14'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/15.png`}
        alt={'Awaken Flow 15'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/16.png`}
        alt={'Awaken Flow 16'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
    <ImageContainer>
      <StaticImage
        src={`./../../../../../assets/images/customers/awaken-flow/slider/17.png`}
        alt={'Awaken Flow 17'}
        style={{ textAlign: 'center' }}
        imgStyle={{ textAlign: 'center' }}
      />
    </ImageContainer>
  </DetailCarousel>
);

export default SlidersAwakenFlow;
