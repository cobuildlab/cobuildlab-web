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
    name: 'social network',
    icon: globe,
    min: 4000,
    max: 6000,
  },
  {
    id: 2,
    name: 'eCommerce',
    icon: shoppingCart,
    min: 3500,
    max: 5500,
  },
  {
    id: 3,
    name: 'media manager',
    icon: photo,
    min: 3000,
    max: 5000,
  },
  {
    id: 4,
    name: 'content manager',
    icon: tasks,
    min: 4000,
    max: 5500,
  },
];

const CalculatorSectionData = ({ getCost }) => {
  const [currentPlatform, setCurrentPlatform] = useState({ max: 0, min: 0, id: null });

  const onClick = useCallback(
    (item) => {
      setCurrentPlatform(item);
      getCost({
        feature: 'data',
        select: [item.name],
        max: item.max,
        min: item.min,
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
    <Columns isMarginless>
      <CalculatorLayoutLeftSection>
        <CalculatorLayoutDescripcion>
          <CalculatorCell isDisplay="flex" isDirection="column" isJustify="center" isAlign="center">
            <CalculatorFeatureName>Data</CalculatorFeatureName>
            <CalculatorFeatureDescription>
              Integrate which this 3rd party services:
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

CalculatorSectionData.defaultProps = {
  getCost: () => null,
};

CalculatorSectionData.propTypes = {
  getCost: PropTypes.func,
};

export default CalculatorSectionData;
