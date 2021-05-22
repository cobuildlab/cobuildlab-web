import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersAcadedmy = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/1.png'}
        alt={'4Geeks Academy 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/2.png'}
        alt={'4Geeks Academy 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/3.png'}
        alt={'4Geeks Academy 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/4.png'}
        alt={'4Geeks Academy 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/5.png'}
        alt={'4Geeks Academy 5'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/6.png'}
        alt={'4Geeks Academy 6'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/4geek/slider/7.png'}
        alt={'4Geeks Academy 7'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersAcadedmy;
