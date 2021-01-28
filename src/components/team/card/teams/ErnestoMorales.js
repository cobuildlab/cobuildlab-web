import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const ErnestoMorales = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Ernesto'} last={'Morales'} description={'UI/UX Designer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Ernesto-Morales.jpg'}
          alt="Ernesto Morales"
        />
      </Card>
    </Column>
  );
};

export default ErnestoMorales;
