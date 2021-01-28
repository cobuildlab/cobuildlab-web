import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const RicardoMoreno = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Ricardo'} last={'Moreno'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Ricardo-Moreno.jpg'}
          alt="Ricardo Moreno"
        />
      </Card>
    </Column>
  );
};

export default RicardoMoreno;
