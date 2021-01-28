import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const CarlosFebres = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Carlos'} last={'Febres'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Carlos-Febres.jpg'}
          alt="Carlos Febres"
        />
      </Card>
    </Column>
  );
};

export default CarlosFebres;
