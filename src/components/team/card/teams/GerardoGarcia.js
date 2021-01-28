import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const GerardoGarcia = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Gerardo'}
        last={'Garcia'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Gerardo-Garcia.jpg'}
          alt="Gerardo Garcia"
        />
      </Card>
    </Column>
  );
};

export default GerardoGarcia;
