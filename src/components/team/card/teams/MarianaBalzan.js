import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MarianaBalzan = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Mariana'} last={'Balzan'} description={'Community Manager'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/MarianaBalzan.jpg'}
          alt="Mariana Balzan"
        />
      </Card>
    </Column>
  );
};

export default MarianaBalzan;
