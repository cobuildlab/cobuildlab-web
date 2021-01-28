import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const LuisEulacio = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Luis'} last={'Eulacio'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Luis-Eulacio.jpg'}
          alt="Kevin Hernandez"
        />
      </Card>
    </Column>
  );
};

export default LuisEulacio;
