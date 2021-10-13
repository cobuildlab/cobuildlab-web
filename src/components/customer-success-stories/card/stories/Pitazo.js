import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const Pitazo = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/el-pitazo'}>
        <Card
          title={'El Pitazo'}
          description={
            <>
              <p>
                Venezuela{"'"}s main independent news website with a powerful <b>Mobile App</b> that
                provides a channel of information for all the users in and out of the country
              </p>
              <span>
                <b>News | Cloud App | Mobile</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/pitazo-1.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default Pitazo;
