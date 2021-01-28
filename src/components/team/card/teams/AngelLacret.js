import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const AngelLacret = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Angel'} last={'Lacret'} description={'Chief of Product Development'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/angel.jpg'}
          alt="Angel Lacret"
        />
      </Card>
    </Column>
  );
};

export default AngelLacret;
