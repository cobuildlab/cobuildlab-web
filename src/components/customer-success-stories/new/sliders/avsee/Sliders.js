import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersAvsee = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/avsee/slider/1.png'}
        alt={'Avsee 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/avsee/slider/2.jpg'}
        alt={'Avsee 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/avsee/slider/3.jpg'}
        alt={'Avsee 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/avsee/slider/4.jpg'}
        alt={'Avsee 4'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersAvsee;
