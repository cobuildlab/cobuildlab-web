import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersMyVoice = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/my-voice/slider/CSS-kademsoftware_1.jpg'}
        alt={'My Voice 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/my-voice/slider/CSS-kademsoftware_2.jpg'}
        alt={'My Voice 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/my-voice/slider/CSS-kademsoftware_3.jpg'}
        alt={'My Voice 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/my-voice/slider/CSS-kademsoftware_4.jpg'}
        alt={'My Voice 4'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersMyVoice;
