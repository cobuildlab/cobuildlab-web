import React from 'react';
import Card from '../Card';
import { Column } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';

const ArtPlay = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Art Play'}
        description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>}
        to={'/customer-success-stories/art-play'}>
        <StaticImage
          src={'./../../../../assets/images/customers/art-play/art-play-logo-black.png'}
          alt="Art Play"
          className="navigate"
        />
      </Card>
    </Column>
  );
};

export default ArtPlay;
