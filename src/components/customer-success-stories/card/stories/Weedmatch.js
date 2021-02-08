import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Weedmatch = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Weedmatch'}
        description={
          'Weedmatch Weedmatch  is the  first free cannabis social network  made by a group of Venezuelans led by its founder Oscar Lopez in Chile…'
        }
        to={'/customer-success-stories/weedmatch'}>
        <StaticImage src={'./../../../../assets/images/customers/Weedmatch.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Weedmatch;
