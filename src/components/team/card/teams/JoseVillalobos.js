import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JoseVillalobos = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Jose'}
        last={'Villalobos'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Jose-Agustín-Villalobos.jpg'}
          alt="Jose Villalobos"
        />
      </Card>
    </Column>
  );
};

export default JoseVillalobos;
