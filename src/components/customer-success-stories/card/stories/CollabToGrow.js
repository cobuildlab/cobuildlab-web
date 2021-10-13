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
          <>
            <p>
              One-of-a-kind SaaS <b>Project Management System</b> that incorporates industry-leading
              practices, workflows, and tools to help executives unlock the growth potential of
              their strategic alliances.
            </p>
            <span>
              <b>SaaS | Enterprise</b>
            </span>
          </>
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
