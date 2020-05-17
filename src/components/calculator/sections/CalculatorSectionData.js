import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { globe } from 'react-icons-kit/fa/globe';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { photo } from 'react-icons-kit/fa/photo';
import { tasks } from 'react-icons-kit/fa/tasks';

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

/*const data = {
  'social-network': {
    name: 'social-network',
    min: 4000,
    max: 6000,
  },
  eCommerce: {
    name: 'eCommerce',
    min: 3500,
    max: 5500,
  },
  'media-manager':{
    name: 'media-manager',
    min: 3000,
    max: 5000,
  },
  'content-manager':{
    name: 'content-manager',
    min: 4000,
    max: 5500,
  }
}*/ const data = [
  {
    name: 'social network',
    icon: globe,
    min: 4000,
    max: 6000,
  },
  {
    name: 'eCommerce',
    icon: shoppingCart,
    min: 3500,
    max: 5500,
  },
  {
    name: 'media manager',
    icon: photo,
    min: 3000,
    max: 5000,
  },
  {
    name: 'content manager',
    icon: tasks,
    min: 4000,
    max: 5500,
  },
];

const CalculatorSectionData = ({ onPlatformSelect }) => {
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
      isActive={currentPlatform.name === item.name}
      data={item}
      onSelect={onClick}>
      <Icon icon={item.icon} size={30} />
      <CalculatorFeatureName>{item.name}</CalculatorFeatureName>
    </CalculatorFeatureCard>
  ));

  return (
    <Columns isMarginless>
      <CalculatorLayoutLeftSection>
        <CalculatorLayoutCellTitle>
          <CalculatorCell>
            <CalculatorCellTitle indigo>Design</CalculatorCellTitle>
          </CalculatorCell>
        </CalculatorLayoutCellTitle>
        <CalculatorLayoutDescripcion>
          <CalculatorCell isDisplay="flex" isAlign="center" isJustify="center">
            <CalculatorFeatureDescription>
              What would your UI theme be?
            </CalculatorFeatureDescription>
          </CalculatorCell>
        </CalculatorLayoutDescripcion>
        <CalculatorLayoutCards>
          <CalculatorCell isDisplay="flex">{items}</CalculatorCell>
        </CalculatorLayoutCards>
      </CalculatorLayoutLeftSection>
      <CalculatorLayoutRightSection>
        <CalculatorCell isDisplay="flex" isAlign="center" isBackground>
          <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
        </CalculatorCell>
      </CalculatorLayoutRightSection>
    </Columns>
  );
};

CalculatorSectionData.defaultProps = {
  onPlatformSelect: () => null,
};

CalculatorSectionData.propTypes = {
  onPlatformSelect: PropTypes.func,
};

export default CalculatorSectionData;
