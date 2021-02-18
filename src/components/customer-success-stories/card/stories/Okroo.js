import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Okroo = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Okroo'}
        description={
          "Some of Miami's most interesting dishes are found in the heart of Downtown, and its restaurants are a reflection of its melting pot quality…"
        }
        to={'/customer-success-stories/okroo'}>
        <StaticImage src={'./../../../../assets/images/customers/okroo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Okroo;
