import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const CollabToGrow = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Collab To Grow'}
        description={
          'Is a technology-enabled managed services and advisory firm that specializes in improving the performance of strategic alliances...'
        }
        to={'/customer-success-stories/collab-to-grow'}>
        <StaticImage
          src={'./../../../../assets/images/customers/collab-logo.jpg'}
          alt="Collab To Grow"
        />
      </Card>
    </Column>
  );
};

export default CollabToGrow;
