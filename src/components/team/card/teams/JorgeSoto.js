import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JorgeSoto = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Jorge'} last={'Soto'} description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Jorge-Soto.jpg'}
          alt="Jorge Soto"
        />
      </Card>
    </Column>
  );
};

export default JorgeSoto;
