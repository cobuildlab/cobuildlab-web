import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const AracelisAcosta = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Aracelis'} last={'Acosta'} description={'Administrator'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/araceli.jpg'}
          alt="Aracelis Acosta"
        />
      </Card>
    </Column>
  );
};

export default AracelisAcosta;
