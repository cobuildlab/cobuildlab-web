import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const CollabToGrow = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/collab-to-grow'}>
        <Card
          title={'Collab To Grow'}
          description={
            <>
              <p>
                One-of-a-kind SaaS <b>Project Management System</b> that incorporates
                industry-leading practices, workflows, and tools to help executives unlock the
                growth potential of their strategic alliances.
              </p>
              <span>
                <b>SaaS | Enterprise</b>
              </span>
            </>
          }>
          <StaticImage
            src={'./../../../../assets/images/customers/collab-logo.jpg'}
            alt="Collab To Grow"
          />
        </Card>
      </Link>
    </Column>
  );
};

export default CollabToGrow;
