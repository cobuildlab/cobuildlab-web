import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const CarolinaBarcelo = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Carolina'} last={'Barcelo'} description={'Content Writer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Carolina-Barcelo.jpg'}
          alt="Carolina Barcelo"
        />
      </Card>
    </Column>
  );
};

export default CarolinaBarcelo;
