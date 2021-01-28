import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const KevinHernandez = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Kevin'} last={'Hernandez'} description={'Chief Finantial Officer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/kevin.jpg'}
          alt="Kevin Hernandez"
        />
      </Card>
    </Column>
  );
};

export default KevinHernandez;
