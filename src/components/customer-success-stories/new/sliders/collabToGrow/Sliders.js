import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersCollabToGrow = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/collabtogrow/slider/1.jpg'}
        alt={'Collab to Grow 1'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/collabtogrow/slider/2.jpg'}
        alt={'Collab to Grow 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/collabtogrow/slider/3.jpg'}
        alt={'Collab to Grow 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/collabtogrow/slider/4.jpg'}
        alt={'Collab to Grow 4'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersCollabToGrow;
