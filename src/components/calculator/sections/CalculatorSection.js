import React from 'react';
import { Container } from 'bloomer';

import CalculatorWrapper from '../CalculatorWrapper';
import CalculatorHeader from './CalculatorHeader';
import CalculatorSectionPlatform from './CalculatorSectionPlatform';
import CalculatorSectionDesign from './CalculatorSectionDesign';
import CalculatorSectionSecutiry from './CalculatorSectionSecutiry';
import CalculatorSectionData from './CalculatorSectionData';
import CalculatorSectionAdditionalFeatures from './CalculatorSectionAdditionalFeatures';

const CalculatorSection = () => {
  return (
    <Container>
      <CalculatorWrapper>
        <CalculatorHeader />
        <CalculatorSectionPlatform />
        <CalculatorSectionDesign />
        <CalculatorSectionSecutiry />
        <CalculatorSectionData />
        <CalculatorSectionAdditionalFeatures />
      </CalculatorWrapper>
    </Container>
  );
};

export default CalculatorSection;
