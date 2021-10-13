import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JobCore = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Jobcore'}
        description={
          <>
            <p>
              America’s first distributed talent pool for the hospitality industry that allows
              employers to post job openings for candidates using the <b>Web and Mobile App</b>.
            </p>
            <span>
              <b>Recruiting | Web and Mobile</b>
            </span>
          </>
        }
        to={'/customer-success-stories/jobcore'}>
        <StaticImage src={'./../../../../assets/images/customers/jobcore.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default JobCore;
