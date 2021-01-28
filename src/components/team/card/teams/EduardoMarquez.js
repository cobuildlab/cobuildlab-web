import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const EduardoMarquez = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Eduardo'}
        last={'Marquez'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Eduardo-Marquez.jpg'}
          alt="Eduardo Marquez"
        />
      </Card>
    </Column>
  );
};

export default EduardoMarquez;
