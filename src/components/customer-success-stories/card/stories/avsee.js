import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Avsee = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Avsee'}
        description={
          'The Avsee team chose Cobuild Lab to be their technology partner in developing a platform that helps physicians and patients…'
        }
        to={'/customer-success-stories/avsee'}>
        <StaticImage src={'./../../../../assets/images/customers/avsee-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Avsee;
