import React from 'react';
import Card from '../Card';
import { Column } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';

const AwakenFlow = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Awaken Flow'}
        description={
          <p>
            Awaken Flow™ is a robust framework to navigate the unknown while claiming a deeply
            fulfilling life. It simplifies our approach to life so we can deal with the complexity
            of being human with wisdom and sovereignty. We can thrive together with our chosen hive
            through the seasons.
          </p>
        }
        to={'/customer-success-stories/awaken-flow'}>
        <StaticImage
          src={'./../../../../assets/images/customers/awaken-flow/awaken-flow-logo.png'}
          alt="Awaken Flow"
          className="navigate"
        />
      </Card>
    </Column>
  );
};

export default AwakenFlow;
