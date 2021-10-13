import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Okroo = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/okroo'}>
        <Card
          title={'Okroo'}
          description={
            <>
              <p>
                A <b>Mobile App </b> that works like a news feed or a social network to connect
                customers with the promotions of restaurants near them .
              </p>
              <span>
                <b>Retail | Lifestyle | Mobile</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/okroo.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Okroo;
