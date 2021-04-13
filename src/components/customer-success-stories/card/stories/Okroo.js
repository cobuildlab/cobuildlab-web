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
          <p>
            A <b>Mobile App </b> that works like a news feed or a social network to connect
            customers with the promotions of restaurants near them .
          </p>
        }
        to={'/customer-success-stories/okroo'}>
        <StaticImage src={'./../../../../assets/images/customers/okroo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Okroo;
