import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Mama = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Mama'}
        description={
          <>
            <p>
              A <b>Mobile App</b> that works as a connectivity tool that gives its users the
              opportunity to create new business connections, friendships, romantic relationships,
              and grow their contact network.
            </p>
            <span>
              <b>Social Media | Mobile</b>
            </span>
          </>
        }
        to={'/customer-success-stories/mama'}>
        <StaticImage src={'./../../../../assets/images/customers/mama-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Mama;
