import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const StoryRocket = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Story Rocket'}
        description={
          'is the ideal place to connect story writers with producers in the entertainment world…'
        }
        to={'/customer-success-stories/story-rocket'}>
        <StaticImage src={'./../../../../assets/images/customers/story-rocket-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default StoryRocket;
