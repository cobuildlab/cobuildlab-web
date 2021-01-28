import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const WillianMata = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Willian'} last={'Mata'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Willian-Mata.jpg'}
          alt="Willian Mata"
        />
      </Card>
    </Column>
  );
};

export default WillianMata;
