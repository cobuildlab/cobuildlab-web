import React from 'react';
import { Container, Column, Columns } from 'bloomer';
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

const SectionContainer = styled.section`
  padding: 2.5rem 0;
`;

const IncubatorLink = () => (
  <SectionContainer id="incubator" isPaddingless>
    <Wrapper>
      <Container>
        <Columns isMarginless>
          <Column isSize={{ mobile: 12, desktop: 2 }} isVCentered>
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
    </Wrapper>
  </SectionContainer>
);

export default IncubatorLink;
