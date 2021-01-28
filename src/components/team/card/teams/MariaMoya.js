import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const MariaMoya = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Maria Gabriela'} last={'Moya'} description={'Marketing Coordinator'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/MariaGabrielaMoya.jpg'}
          alt="Maria Gabriela Moya"
        />
      </Card>
    </Column>
  );
};

export default MariaMoya;
