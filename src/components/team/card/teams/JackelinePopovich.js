import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const JackelinePopovich = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Jackeline'} last={'Popovich'} description={'Product Manager'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/jacqueline-popovich.png'}
          alt="Jackeline Popovich"
        />
      </Card>
    </Column>
  );
};

export default JackelinePopovich;
