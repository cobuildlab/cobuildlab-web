import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MyVoice = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'MyVoice'}
        description={
          'Cobuild Lab partnered up with Kadem Education to raise teacher’s voices by building a software solution.'
        }
        to={'/customer-success-stories/my-voice'}>
        <StaticImage src={'./../../../../assets/images/customers/my-voice.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default MyVoice;
