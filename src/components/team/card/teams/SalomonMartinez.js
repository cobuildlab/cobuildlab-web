import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const SalomonMartinez = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Salomon'} last={'Martinez'} description={'Full Stack Javascript Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Salomon-Martinez.jpg'}
          alt="Salomon Martinez"
        />
      </Card>
    </Column>
  );
};

export default SalomonMartinez;
