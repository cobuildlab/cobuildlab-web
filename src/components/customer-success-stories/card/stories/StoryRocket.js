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
          <>
            <p>
              A <b>Web platform</b> that connects great writers with the global production community
              to make film, television, theater, or web.
            </p>
            <span>
              <b>Social Media | Web</b>
            </span>
          </>
        }
        to={'/customer-success-stories/story-rocket'}>
        <StaticImage src={'./../../../../assets/images/customers/story-rocket-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default StoryRocket;
