import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersPropagad = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/1.png'}
        alt={'Propagad 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/2.png'}
        alt={'Propagad 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/3.png'}
        alt={'Propagad 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/4.png'}
        alt={'Propagad 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/5.png'}
        alt={'Propagad 5'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/6.png'}
        alt={'Propagad 6'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/propagad/slider/7.png'}
        alt={'Propagad 7'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersPropagad;
