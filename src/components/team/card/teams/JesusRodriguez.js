import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JesusRodriguez = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Jesus'}
        last={'Rodriguez'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Jesus-Rodriguez.jpg'}
          alt="Jesus Rodriguez"
        />
      </Card>
    </Column>
  );
};

export default JesusRodriguez;
