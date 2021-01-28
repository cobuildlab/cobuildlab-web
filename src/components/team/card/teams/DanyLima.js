import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const DanyLima = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card first={'Dany'} last={'Lima'} description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Dany-Leonel-Lima.jpg'}
          alt="Dany Leonel Lima"
        />
      </Card>
    </Column>
  );
};

export default DanyLima;
