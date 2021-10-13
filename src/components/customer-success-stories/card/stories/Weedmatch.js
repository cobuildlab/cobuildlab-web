import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Weedmatch = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/weedmatch'}>
        <Card
          title={'Weedmatch'}
          description={
            <>
              <p>
                World{"'"}s first free cannabis social network to connect the community through a{' '}
                <b>Mobile App</b>.
              </p>
              <span>
                <b>Social Media | Mobile</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/Weedmatch.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Weedmatch;
