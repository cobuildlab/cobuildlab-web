import React from 'react';
import { Container } from 'bloomer';

import CalculatorWrapper from '../CalculatorWrapper';
import CalculatorCellPlatform from './CalculatorCellPlatform';

const CalculatorSection = () => {
  return (
    <Container>
      <CalculatorWrapper>
        <CalculatorCellPlatform />
        <CalculatorCellPlatform />
      </CalculatorWrapper>
    </Container>
  );
};

export default CalculatorSection;
