import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MayelaMarin = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Mayela'} last={'Marin'} description={'Project Manager'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Mayela-Marin.jpg'}
          alt="Mayela Marin"
        />
      </Card>
    </Column>
  );
};

export default MayelaMarin;
