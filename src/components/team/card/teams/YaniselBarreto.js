import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const YaniselBarreto = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Yanisel'} last={'Barreto'} description={'Chief of Staff'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Yanisel-Barreto.jpg'}
          alt="Yanisel Barreto"
        />
      </Card>
    </Column>
  );
};

export default YaniselBarreto;
