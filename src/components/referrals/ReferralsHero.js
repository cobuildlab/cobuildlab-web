import React from 'react';
import { ReferralsLeftSideHero } from './ReferralsLeftSideHero';
import { Column, Columns, Container } from 'bloomer';
import { ReferralsRightSideHero } from './ReferralsRightSideHero';

export const ReferralsHero = () => (
  <Container isFluid isPaddingless>
    <Columns isMarginless>
      <Column isPaddingless isSize={{ mobile: 12, desktop: 6 }}>
        <ReferralsLeftSideHero />
      </Column>
      <Column isPaddingless isSize={{ mobile: 12, desktop: 6 }}>
        <ReferralsRightSideHero />
      </Column>
    </Columns>
  </Container>
);
