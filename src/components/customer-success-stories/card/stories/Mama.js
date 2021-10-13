import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Mama = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/mama'}>
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
          }>
          <StaticImage src={'./../../../../assets/images/customers/mama-logo.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Mama;
