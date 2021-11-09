import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersArtVault = () => (
  <DetailCarousel>
    <div style={{ height: '500px', width: '900px' }}>
      <StaticImage
        src={'./../../../../../assets/images/customers/navigate/slider/1.png'}
        alt={'Navigate 1'}
        height={'400px'}
      />
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

export default SlidersArtVault;
