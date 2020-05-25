import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { thLarge } from 'react-icons-kit/fa/thLarge';
import { columns as colIcon } from 'react-icons-kit/fa/columns';

import CalculatorLayoutLeftSection from '../layout/CalculatorLayoutLeftSection';
import CalculatorLayoutRightSection from '../layout/CalculatorLayoutRightSection';
import CalculatorLayoutDescripcion from '../layout/CalculatorLayoutDescripcion';
import CalculatorLayoutCards from '../layout/CalculatorLayoutCards';
import CalculatorCell from '../cell/CalculatorCell';

import CalculatorFatureCaption from '../feature/CalculatorFatureCaption';
import CalculatorFeatureName from '../feature/CalculatorFeatureName';
import CalculatorFeatureDescription from '../feature/CalculatorFeatureDescription';
import CalculatorFeatureCard from '../feature/CalculatorFeatureCard';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const data = [
  {
    id: 1,
    name: 'custom-ui',
    icon: thLarge,
    min: 2000,
    max: 2500,
  },
  {
    id: 2,
    name: 'template',
    icon: colIcon,
    min: 1000,
    max: 1500,
  },
];

const CalculatorSectionDesign = ({ getCost }) => {
  const [currentPlatform, setCurrentPlatform] = useState({ max: 0, min: 0, id: null });

  const onClick = useCallback(
    (item) => {
      setCurrentPlatform(item);
      getCost({
        feature: 'design',
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
            <CalculatorFeatureName>Design</CalculatorFeatureName>
            <CalculatorFeatureDescription>
              What would your UI theme be?
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

CalculatorSectionDesign.defaultProps = {
  getCost: () => null,
};

CalculatorSectionDesign.propTypes = {
  getCost: PropTypes.func,
};

export default CalculatorSectionDesign;
