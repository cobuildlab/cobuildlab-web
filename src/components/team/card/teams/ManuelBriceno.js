import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const ManuelBriceno = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Manuel'} last={'Briceno'} description={'UI/UX Designer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Manuel-Briceno.jpg'}
          alt="Manuel Briceno"
        />
      </Card>
    </Column>
  );
};

export default ManuelBriceno;
