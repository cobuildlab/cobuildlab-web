import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const GeeksAcademy = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'4Geeks Academy'}
        description={
          <>
            <p>
              A <b>Learning Management System</b> that train and turn their students around the
              globe into software developers with an innovative study program.
            </p>
            <span>
              <b>Education | e-learning</b>
            </span>
          </>
        }
        to={'/customer-success-stories/4geeks-academy'}>
        <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
      </Card>
    </Column>
  );
};

export default GeeksAcademy;
