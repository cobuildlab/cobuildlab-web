import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersMama = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/mama/slider/mama3.jpg'}
        alt={'Mama 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/mama/slider/mama1.png'}
        alt={'Mama 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/mama/slider/mama2.jpg'}
        alt={'Mama 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/mama/slider/mama4.jpg'}
        alt={'Mama 1'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersMama;
