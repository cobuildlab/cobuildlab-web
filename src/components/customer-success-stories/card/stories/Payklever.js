import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Payklever = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Payklever Campaign Manager'}
        description={
          'Payklever Campaign Manager With Payklever you can turn your car into a payment method. You can drive quietly and never handle your cash or…'
        }
        to={'/customer-success-stories/payklever-campaign-manager'}>
        <StaticImage src={'./../../../../assets/images/customers/Payklever.png'} alt="" />
      </Card>
    </Column>
  );
};

export default Payklever;
