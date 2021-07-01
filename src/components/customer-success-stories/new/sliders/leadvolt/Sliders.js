import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersLeadVolt = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/1.jpg'}
        alt={'leadvolt 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/2.jpg'}
        alt={'leadvolt 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/3.jpg'}
        alt={'leadvolt 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/4.jpg'}
        alt={'leadvolt 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/5.jpg'}
        alt={'leadvolt 5'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/leadvolt/slider/6.jpg'}
        alt={'leadvolt 6'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersLeadVolt;
