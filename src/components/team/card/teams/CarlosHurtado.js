import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const CarlosHurtado = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Carlos'} last={'Hurtado'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Carlos-Hurtado.jpg'}
          alt="Carlos Hurtado"
        />
      </Card>
    </Column>
  );
};

export default CarlosHurtado;
