import React from 'react';

import Card from '../Card';
import { StaticImage } from 'gatsby-plugin-image';
import { Column } from 'bloomer';

const ArtVault = () => {
  return (
    <Column isSize={{ mobile: 12, tablet: 4 }} isPaddingless>
      <Card
        title={'Art Vault'}
        description={
          <>
            <p>
              Is an Art Management System that helps artists keep track of their inventory and the
              purchasing of their pieces.
            </p>
            <span>
              <b>Mobile</b>
            </span>
          </>
        }
        to={'/customer-success-stories/art-vault'}>
        <StaticImage src={'./../../../../assets/images/customers/art-vault-logo.jpg'} alt="" />
      </Card>
    </Column>
  );
};

export default ArtVault;
