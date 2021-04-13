import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Pitazo = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'El Pitazo'}
        description={
          <p>
            Venezuela{"'"}s main independent news website with a powerful <b>Mobile App</b> that
            provides a channel of information for all the users in and out of the country
          </p>
        }
        to={'/customer-success-stories/el-pitazo'}>
        <StaticImage src={'./../../../../assets/images/customers/pitazo-1.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Pitazo;
