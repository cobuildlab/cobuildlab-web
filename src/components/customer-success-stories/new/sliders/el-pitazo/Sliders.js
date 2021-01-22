import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersPitazo = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/el-pitazo/slider/pitazo-3.jpg'}
        alt={'El pitazo 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/el-pitazo/slider/pitazo-4.jpg'}
        alt={'El pitazo 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/el-pitazo/slider/pitazo-5.jpg'}
        alt={'El pitazo 5'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersPitazo;
