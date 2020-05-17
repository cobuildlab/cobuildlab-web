import React, { Fragment } from 'react';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { android } from 'react-icons-kit/fa/android';

import CalculatorLayoutLeftSection from '../layout/CalculatorLayoutLeftSection';
import CalculatorLayoutRightSection from '../layout/CalculatorLayoutRightSection';
import CalculatorLayoutDescripcion from '../layout/CalculatorLayoutDescripcion';
import CalculatorLayoutCellTitle from '../layout/CalculatorLayoutCellTitle';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';

import CalculatorCellTitle from '../cell/CalculatorCellTitle';
import CalculatorCell from '../cell/CalculatorCell';
import CalculatorFeatureName from '../feature/CalculatorFeatureName';
import CalculatorFeatureDescription from '../feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const CalculatorCellPlatform = () => {
  return (
    <Fragment>
      <Columns isMarginless>
        <CalculatorLayoutLeftSection>
          <CalculatorLayoutCellTitle>
            <CalculatorCell>
              <CalculatorCellTitle indigo>Platform</CalculatorCellTitle>
            </CalculatorCell>
          </CalculatorLayoutCellTitle>
          <CalculatorLayoutDescripcion>
            <CalculatorCell isDisplay="flex" isAlign="center">
              <CalculatorFeatureDescription>
                Select the platform to your project
              </CalculatorFeatureDescription>
            </CalculatorCell>
          </CalculatorLayoutDescripcion>
          <CalculatorLayoutCards>
            <CalculatorCell isDisplay="flex">
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
            </CalculatorCell>
          </CalculatorLayoutCards>
        </CalculatorLayoutLeftSection>
        <CalculatorLayoutRightSection>
          <CalculatorCell isDisplay="flex" isBackground>
            <CalculatorCellTitle isHidden="mobile">Amount</CalculatorCellTitle>
            <CalculatorFeatureCost cost="120" />
          </CalculatorCell>
        </CalculatorLayoutRightSection>
      </Columns>
    </Fragment>
  );
};

export default CalculatorCellPlatform;
