import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersJobcore = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/jobcore/slider/1.jpg'}
        alt={'Job Core 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/jobcore/slider/2.jpg'}
        alt={'Job Core 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/jobcore/slider/3.jpg'}
        alt={'Job Core 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/jobcore/slider/4.jpg'}
        alt={'Job Core 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/jobcore/slider/5.jpg'}
        alt={'Job Core 5'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersJobcore;
