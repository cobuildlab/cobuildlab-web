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
          <p>
            A <b>Survey Management System</b> designed to raise teachers{"'"} voices to accomplish
            improvements in the educational system from within.
          </p>
        }
        to={'/customer-success-stories/my-voice'}>
        <StaticImage src={'./../../../../assets/images/customers/my-voice.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default MyVoice;
