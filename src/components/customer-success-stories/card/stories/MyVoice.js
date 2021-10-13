import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';
import { Link } from 'gatsby';

const MyVoice = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Link to={'/customer-success-stories/my-voice'}>
        <Card
          title={'MyVoice'}
          description={
            <>
              <p>
                A <b>Survey Management System</b> designed to raise teacher{"'"}s voices to
                accomplish improvements in the educational system from within.
              </p>
              <span>
                <b>Survey | Education | Application</b>
              </span>
            </>
          }>
          <StaticImage src={'./../../../../assets/images/customers/my-voice.jpg'} alt="" />
        </Card>
      </Link>
    </Column>
  );
};

export default MyVoice;
