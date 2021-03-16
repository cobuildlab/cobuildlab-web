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
          'Propagad Contact Person:  Cesar Lang Location:  Miami, US Industry:  Marketing and Advertising Web Site:  www.propagad.com Introducing Cesar…'
        }
        to={'/customer-success-stories/propagad'}>
        <StaticImage src={'./../../../../assets/images/customers/Propagad.png'} alt="" />
      </Card>
    </Column>
  );
};

export default Propagad;
