import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const LeadVolt = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'LeadVolt'}
        description={
          <>
            <p>
              It{"'"}s a high-touch <b>Lead Management System</b> that closes leads faster, provides
              full transparency, and empowers any company to focus only on the customer.
            </p>
            <span>
              <b>SaaS | Enterprise Software</b>
            </span>
          </>
        }
        to={'/customer-success-stories/leadvolt'}>
        <StaticImage
          src={'./../../../../assets/images/customers/leadvolt-logo.jpg'}
          alt="Leadvolt Logo"
        />
      </Card>
    </Column>
  );
};

export default LeadVolt;
