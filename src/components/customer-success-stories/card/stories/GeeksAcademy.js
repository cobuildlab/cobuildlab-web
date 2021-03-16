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
          '4Geeks Academy Contact Person:  Marcelo Ricigliano Location:  Miami, US, Caracas and Maracaibo, Venezuela Industry:  Education Web Site…'
        }
        to={'/customer-success-stories/4geeks-academy'}>
        <StaticImage src={'./../../../../assets/images/customers/4geeks.png'} alt="" />
      </Card>
    </Column>
  );
};

export default GeeksAcademy;
