import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const AlanGuevara = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Alan'} last={'R. Guevara'} description={'Chief of Product Management'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/alanthinks.jpg'}
          alt="Alan R. Guevara"
        />
      </Card>
    </Column>
  );
};

export default AlanGuevara;
