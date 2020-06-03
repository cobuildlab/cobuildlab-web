import React from 'react';
import { Container, Column, Columns, Section } from 'bloomer';
import styled from 'styled-components';
import IncubatorContent from './IncubatorContent';
import IncubatorImage from './IncubatorImage';
import IncubatorButton from './IncubatorButton';

const Wrapper = styled.div`
  background-color: #264a60;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IncubatorLink = () => (
  <Section id="incubator" isPaddingless>
    <Wrapper>
      <Container>
        <Columns isMarginless>
          <Column isPaddingless isSize={{ mobile: 12, desktop: 2 }}>
            <IncubatorImage />
          </Column>
          <Column isPaddingless isSize={{ mobile: 12, desktop: 7 }}>
            <IncubatorContent />
          </Column>
          <Column isPaddingless isSize={{ mobile: 12, desktop: 3 }}>
            <IncubatorButton />
          </Column>
        </Columns>
      </Container>
    </Wrapper>
  </Section>
);

export default IncubatorLink;
