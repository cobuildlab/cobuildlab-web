import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersWeedmatch = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/1.jpg'}
        alt={'weedmatch 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/2.jpg'}
        alt={'weedmatch 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/3.jpg'}
        alt={'weedmatch 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/4.jpg'}
        alt={'weedmatch 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/5.jpg'}
        alt={'weedmatch 5'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/weedmatch/slider/6.jpg'}
        alt={'weedmatch 6'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersWeedmatch;
