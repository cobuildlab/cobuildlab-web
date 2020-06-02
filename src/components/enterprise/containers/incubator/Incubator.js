import React from 'react';
import { Container, Column, Columns, Section } from 'bloomer';
import IncubatorContent from './IncubatorContent';
import IncubatorImage from './IncubatorImage';
import IncubatorButton from './IncubatorButton';

const IncubatorLink = () => (
  <Section id="incubator">
    <Container>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <IncubatorImage />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 7 }}>
          <IncubatorContent />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 3 }}>
          <IncubatorButton />
        </Column>
      </Columns>
    </Container>
  </Section>
);

export default IncubatorLink;
