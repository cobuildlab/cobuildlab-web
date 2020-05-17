import React from 'react';
import { Container } from 'bloomer';

import CalculatorWrapper from '../CalculatorWrapper';
import CalculatorSectionPlatform from './CalculatorSectionPlatform';
import CalculatorSectionDesign from './CalculatorSectionDesign';

const CalculatorSection = () => {
  return (
    <Container>
      <CalculatorWrapper>
        <CalculatorSectionPlatform />
        <CalculatorSectionDesign />
      </CalculatorWrapper>
    </Container>
  );
};

export default CalculatorSection;
