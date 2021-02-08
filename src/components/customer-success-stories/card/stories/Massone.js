import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Massone = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Massone'}
        description={
          'Massone Mechanical Massone Mechanical offers maintenance and installation services to commercial refrigeration companies. Offering high…'
        }
        to={'/customer-success-stories/massone'}>
        <StaticImage src={'./../../../../assets/images/customers/Massone.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Massone;
