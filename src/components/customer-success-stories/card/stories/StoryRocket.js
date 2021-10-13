import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const StoryRocket = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/story-rocket'}>
        <Card
          title={'Story Rocket'}
          description={
            <>
              <p>
                A <b>Web platform</b> that connects great writers with the global production
                community to make film, television, theater, or web.
              </p>
              <span>
                <b>Social Media | Web</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/story-rocket-logo.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default StoryRocket;
