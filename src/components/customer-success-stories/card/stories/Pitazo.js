import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Pitazo = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'El Pitazo'}
        description={"El Pitazo is Venezuela's main independent news website..."}
        to={'/customer-success-stories/el-pitazo'}>
        <StaticImage src={'./../../../../assets/images/customers/pita.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Pitazo;
