import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MoisesMarquina = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Moises'} last={'Marquina'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Moises-Marquina.jpg'}
          alt="Moises Marquina"
        />
      </Card>
    </Column>
  );
};

export default MoisesMarquina;
