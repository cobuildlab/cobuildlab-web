import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';

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

const CalculatorSingleSelectionFeature = ({ featureCost, data, featureId, title, description }) => {
  const [currentPlatform, setCurrentPlatform] = useState({ max: 0, min: 0, id: null });

  const onClick = useCallback(
    (platform) => {
      setCurrentPlatform(platform);
      featureCost({
        feature: featureId,
        select: [platform.name],
        max: platform.max,
        min: platform.min,
      });
    },
    [featureCost, featureId],
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
            <CalculatorFeatureName>{title}</CalculatorFeatureName>
            <CalculatorFeatureDescription>{description}</CalculatorFeatureDescription>
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

CalculatorSingleSelectionFeature.defaultProps = {
  featureCost: () => null,
};

CalculatorSingleSelectionFeature.propTypes = {
  featureCost: PropTypes.func,
  featureId: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CalculatorSingleSelectionFeature;
