import React from 'react';
import { Container } from 'bloomer';
import styled from 'styled-components';
import ValueTitle from './ValueTitle';
import ValueBusinessSection from './ValueBusinessSection';
import ValueTechnicalSection from './ValueTechnicalSection';

const Wrapper = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 3.5rem;
`;

const BusinessValue = () => (
  <Container>
    <Wrapper>
      <ValueTitle />
      <ValueBusinessSection />
      <ValueTechnicalSection />
    </Wrapper>
  </Container>
);

export default BusinessValue;
