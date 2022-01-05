import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersNavigate = () => (
  <DetailCarousel>
    <div
      style={{
        height: '400px',
        width: '900px',
      }}>
      <div style={{ textAlign: 'center' }}>
        <StaticImage
          src={'./../../../../../assets/images/customers/navigate/slider/1.png'}
          alt={'Navigate 1'}
          height={'400px'}
          style={{ textAlign: 'center' }}
          imgStyle={{ textAlign: 'center' }}
        />
      </div>
    </div>
    <div style={{ height: '500px', width: '900px' }}>
      <StaticImage
        src={'./../../../../../assets/images/customers/navigate/slider/2.png'}
        alt={'Navigate 2'}
      />
    </div>
    <div style={{ height: '500px', width: '900px' }}>
      <StaticImage
        src={'./../../../../../assets/images/customers/navigate/slider/3.png'}
        alt={'Navigate 3'}
      />
    </div>
    <div style={{ height: '500px', width: '900px' }}>
      <StaticImage
        src={'./../../../../../assets/images/customers/navigate/slider/4.png'}
        alt={'Navigate 4'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersNavigate;
