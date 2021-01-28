import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const EdgarEspinetti = () => {
  return (
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <Card
        first={'Edgar'}
        last={'Espinetti'}
        description={'Full Stack Javascript/Python Developer'}>
        <StaticImage
          className={'team-member-img'}
          src={'./../../../../assets/images/team/team-pictures/Edgar-Espinetti.jpg'}
          alt="Edgar Espinetti"
        />
      </Card>
    </Column>
  );
};

export default EdgarEspinetti;
