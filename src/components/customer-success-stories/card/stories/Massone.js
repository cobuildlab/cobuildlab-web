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
          <>
            <p>
              A <b>Fleet Management System</b> that allows the tracking of their products, staff,
              and services.
            </p>
            <span>
              <b>Transport | Enterprise | Web and Mobile </b>
            </span>
          </>
        }
        to={'/customer-success-stories/massone'}>
        <StaticImage src={'./../../../../assets/images/customers/Massone.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Massone;
