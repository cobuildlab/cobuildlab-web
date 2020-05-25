import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { android } from 'react-icons-kit/fa/android';
import { apple } from 'react-icons-kit/fa/apple';
import { globe } from 'react-icons-kit/fa/globe';

import CalculatorLayoutLeftSection from '../layout/CalculatorLayoutLeftSection';
import CalculatorLayoutRightSection from '../layout/CalculatorLayoutRightSection';
import CalculatorLayoutDescripcion from '../layout/CalculatorLayoutDescripcion';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';

import CalculatorCell from '../cell/CalculatorCell';
import CalculatorFeatureName from '../feature/CalculatorFeatureName';
import CalculatorFatureCaption from '../feature/CalculatorFatureCaption';
import CalculatorFeatureDescription from '../feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const data = [
  {
    id: 1,
    name: 'android',
    icon: android,
    min: 1500,
    max: 2500,
  },
  {
    id: 2,
    name: 'apple',
    icon: apple,
    min: 1500,
    max: 2500,
  },
  {
    id: 3,
    name: 'cross platform',
    icon: globe,
    min: 2000,
    max: 2800,
  },
];

const CalculatorSectionPlatform = ({ getCost }) => {
  const [currentPlatform, setCurrentPlatform] = useState({ max: 0, min: 0, id: null });

  const onClick = useCallback(
    (platform) => {
      setCurrentPlatform(platform);
      getCost({
        feature: 'platform',
        max: platform.max,
        min: platform.min,
      });
    },
    [currentPlatform],
  );

  const items = data.map((item) => (
    <CalculatorFeatureCard
      key={item.name}
      isActive={currentPlatform.id === item.id}
      data={item}
      onSelect={onClick}>
      <Icon icon={item.icon} size={30} />
      <CalculatorFatureCaption>{item.name}</CalculatorFatureCaption>
    </CalculatorFeatureCard>
  ));

  return (
    <Columns isMarginless isMultiline>
      <CalculatorLayoutLeftSection>
        <CalculatorLayoutDescripcion>
          <CalculatorCell isDisplay="flex" isDirection="column" isJustify="center" isAlign="center">
            <CalculatorFeatureName>Platform</CalculatorFeatureName>
            <CalculatorFeatureDescription>
              Select the platform to your project
            </CalculatorFeatureDescription>
          </CalculatorCell>
        </CalculatorLayoutDescripcion>
        <CalculatorLayoutCards>
          <CalculatorCell isDisplay="flex" isMultiline>
            {items}
          </CalculatorCell>
        </CalculatorLayoutCards>
      </CalculatorLayoutLeftSection>
      <CalculatorLayoutRightSection>
        <CalculatorCell isDisplay="flex" isJustify="center" isAlign="center">
          <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
        </CalculatorCell>
      </CalculatorLayoutRightSection>
    </Columns>
  );
};

CalculatorSectionPlatform.defaultProps = {
  getCost: () => null,
};

CalculatorSectionPlatform.propTypes = {
  getCost: PropTypes.func,
};

export default CalculatorSectionPlatform;
