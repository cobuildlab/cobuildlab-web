import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JeffLeon = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Jeff'} last={'Leon'} description={'Business Development'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/jeff-leon.jpg'}
          alt="Jeff Leon"
        />
      </Card>
    </Column>
  );
};

export default JeffLeon;
