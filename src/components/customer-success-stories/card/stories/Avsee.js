import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const Avsee = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Avsee'}
        description={
          <>
            <p>
              A <b>Web platform</b> that helps physicians and patients by facilitating the follow-up
              of their medical plan.
            </p>
            <span>
              <b>Healthcare | Healthcare</b>
            </span>
          </>
        }
        to={'/customer-success-stories/avsee'}>
        <StaticImage src={'./../../../../assets/images/customers/avsee-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default Avsee;
