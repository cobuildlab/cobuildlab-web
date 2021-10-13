import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Massone = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/massone'}>
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
          }>
          <StaticImage src={'./../../../../assets/images/customers/Massone.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Massone;
