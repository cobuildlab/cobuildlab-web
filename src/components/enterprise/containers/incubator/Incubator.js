import React from 'react';
import { Container, Column, Columns, Section } from 'bloomer';
import styled from 'styled-components';
import IncubatorContent from './IncubatorContent';
import IncubatorImage from './IncubatorImage';
import IncubatorButton from './IncubatorButton';

const Right = styled(Column)`
  position: relative;
`;

const SectionContainer = styled(Section)`
  padding: 1rem 0;
`;

const IncubatorLink = () => (
  <SectionContainer id="incubator">
    <Container>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 2 }}>
          <IncubatorImage />
        </Column>
        <Column isSize={{ mobile: 12, desktop: 7 }}>
          <IncubatorContent />
        </Column>
        <Right isSize={{ mobile: 12, desktop: 3 }}>
          <IncubatorButton />
        </Right>
      </Columns>
    </Container>
  </SectionContainer>
);

export default IncubatorLink;
