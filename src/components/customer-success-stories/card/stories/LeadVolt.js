import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const LeadVolt = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/leadvolt'}>
        <Card
          title={'LeadVolt'}
          description={
            <>
              <p>
                It{"'"}s a high-touch <b>Lead Management System</b> that closes leads faster,
                provides full transparency, and empowers any company to focus only on the customer.
              </p>
              <span>
                <b>SaaS | Enterprise Software</b>
              </span>
            </>
          }>
          <StaticImage
            src={'./../../../../assets/images/customers/leadvolt-logo.jpg'}
            alt="Leadvolt Logo"
          />
        </Card>
      </Link>
    </Column>
  );
};

export default LeadVolt;
