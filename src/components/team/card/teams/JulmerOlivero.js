import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JulmerOlivero = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Julmer'}
        last={'Olivero'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Julmer-Olivero.jpg'}
          alt="Julmer Olivero"
        />
      </Card>
    </Column>
  );
};

export default JulmerOlivero;
