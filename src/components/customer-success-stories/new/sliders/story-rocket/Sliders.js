import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DetailCarousel from '../../../detail-carousel/new/DetailCarousel';

const SlidersStoryRocket = () => (
  <DetailCarousel>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/story-rocket/slider/2.jpeg'}
        alt={'StoryRocket 2'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/story-rocket/slider/3.jpeg'}
        alt={'StoryRocket 3'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/story-rocket/slider/4.jpeg'}
        alt={'StoryRocket 4'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/story-rocket/slider/5.jpeg'}
        alt={'StoryRocket 5'}
      />
    </div>
    <div>
      <StaticImage
        src={'./../../../../../assets/images/customers/story-rocket/slider/6.png'}
        alt={'StoryRocket 6'}
      />
    </div>
  </DetailCarousel>
);

export default SlidersStoryRocket;
