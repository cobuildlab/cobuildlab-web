import React from 'react';
import { Container, Column, Columns, Section } from 'bloomer';
import styled from 'styled-components';

import IncubatorContent from './IncubatorContent';
import IncubatorIcons from './IncubatorIcons';
import IncubatorImage from './IncubatorImage';
import IncubatorButton from './IncubatorButton';

const Right = styled(Column)`
  position: relative;
`;

const SectionContainer = styled(Section)`
  padding-top: 10em;
  padding-bottom: 5em;
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const IncubatorLink = () => (
  <SectionContainer id="incubator">
    <Container>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 7 }}>
          <IncubatorContent />
          <IncubatorIcons />
        </Column>
        <Right isSize={{ mobile: 12, desktop: 4 }} isOffset={{ desktop: 1 }}>
          <IncubatorImage />
          <IncubatorButton />
        </Right>
      </Columns>
    </Container>
  </SectionContainer>
);

export default IncubatorLink;
