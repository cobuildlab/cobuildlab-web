import React from 'react';
import { Column, Columns, Container } from 'bloomer';
import { ReferralsLeftSideHero } from './ReferralsLeftSideHero';
import { ReferralsRightSideHero } from './ReferralsRightSideHero';

export const ReferralsHero = () => (
  <Container isFluid isPaddingless>
    <Columns>
      <Column isPaddingless isHidden="mobile" isSize={{ tablet: 6, desktop: 6 }}>
        <ReferralsLeftSideHero />
      </Column>
      <Column isPaddingless isSize={{ mobile: 12, tablet: 6, desktop: 6 }}>
        <ReferralsRightSideHero />
      </Column>
    </Columns>
  </Container>
);
