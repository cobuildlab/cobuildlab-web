import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersMama = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/mama/slider/mama.png'}
        alt={'Mama'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersMama;
