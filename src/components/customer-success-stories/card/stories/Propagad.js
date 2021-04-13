import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Propagad = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Propagad'}
        description={
          <p>
            A marketplace to buy and sell ad spaces on any media, anywhere. Their AdMach algorithm
            give a relevance score between audiences and ad offers.
          </p>
        }
        to={'/customer-success-stories/propagad'}>
        <StaticImage src={'./../../../../assets/images/customers/Propagad.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Propagad;
