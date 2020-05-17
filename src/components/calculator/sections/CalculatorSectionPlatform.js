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
import CalculatorLayoutCellTitle from '../layout/CalculatorLayoutCellTitle';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';

import CalculatorCellTitle from '../cell/CalculatorCellTitle';
import CalculatorCell from '../cell/CalculatorCell';
import CalculatorFeatureName from '../feature/CalculatorFeatureName';
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

const CalculatorSectionPlatform = ({ onPlatformSelect }) => {
  const [currentPlatform, setCurrentPlatform] = useState(data[0]);

  const onClick = useCallback(
    (platform) => {
      setCurrentPlatform(platform);
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
      <CalculatorFeatureName>{item.name}</CalculatorFeatureName>
    </CalculatorFeatureCard>
  ));

  return (
    <Columns isMarginless isMultiline>
      <CalculatorLayoutLeftSection>
        <CalculatorLayoutCellTitle>
          <CalculatorCell>
            <CalculatorCellTitle indigo>Platform</CalculatorCellTitle>
          </CalculatorCell>
        </CalculatorLayoutCellTitle>
        <CalculatorLayoutDescripcion>
          <CalculatorCell isDisplay="flex" isAlign="center" isJustify="center">
            <CalculatorFeatureDescription>
              Select the platform to your project
            </CalculatorFeatureDescription>
          </CalculatorCell>
        </CalculatorLayoutDescripcion>
        <CalculatorLayoutCards>
          <CalculatorCell isDisplay="flex">{items}</CalculatorCell>
        </CalculatorLayoutCards>
      </CalculatorLayoutLeftSection>
      <CalculatorLayoutRightSection>
        <CalculatorCell isDisplay="flex" isBackground>
          <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
        </CalculatorCell>
      </CalculatorLayoutRightSection>
    </Columns>
  );
};

CalculatorSectionPlatform.defaultProps = {
  onPlatformSelect: () => null,
};

CalculatorSectionPlatform.propTypes = {
  onPlatformSelect: PropTypes.func,
};

export default CalculatorSectionPlatform;
