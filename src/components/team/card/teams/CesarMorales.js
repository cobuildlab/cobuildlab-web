import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const CesarMorales = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Cesar'} last={'Morales'} description={'QA Analyst'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Cesar-Morales.jpg'}
          alt="Cesar Morales"
        />
      </Card>
    </Column>
  );
};

export default CesarMorales;
