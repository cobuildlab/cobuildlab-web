import { Column } from 'bloomer';
import Card from '../Card';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Fisherman = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Fisherman'}
        description={
          <>
            <p>
              Fisherman is an application interconnected with Slack and Github that helps
              development teams to perform their duties in a faster and more efficient way, such as
              standups, metrics, emails, tasks, and more.
            </p>
          </>
        }
        to={'/customer-success-stories/fisherman'}>
        <StaticImage
          src={'./../../../../assets/images/customers/fisherman/fisherman-logo.png'}
          objectFit={'contain'}
          alt="Fisherman Logo"
        />
      </Card>
    </Column>
  );
};

export default Fisherman;
