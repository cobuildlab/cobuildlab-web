import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Weedmatch = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Weedmatch'}
        description={
          <p>
            World{"'"}s first free cannabis social network to connect the community through a{' '}
            <b>Mobile App</b>.
          </p>
        }
        to={'/customer-success-stories/weedmatch'}>
        <StaticImage src={'./../../../../assets/images/customers/Weedmatch.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Weedmatch;
