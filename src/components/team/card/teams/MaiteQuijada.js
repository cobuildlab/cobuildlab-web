import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MaiteQuijada = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Maite'} last={'Quijada'} description={'Content Writer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Maite-Quijada.jpg'}
          alt="Maite Quijada"
        />
      </Card>
    </Column>
  );
};

export default MaiteQuijada;
