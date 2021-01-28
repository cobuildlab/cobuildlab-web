import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const AlexanderRomero = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Alexander'} last={'Romero'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Alexander-Romero.jpg'}
          alt="Alexander Romero"
        />
      </Card>
    </Column>
  );
};

export default AlexanderRomero;
