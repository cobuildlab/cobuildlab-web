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
          'Leadvolt is a high touch lead management system that closes leads faster, provides full transparency, and empowers your agency to focus on the customer…'
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
