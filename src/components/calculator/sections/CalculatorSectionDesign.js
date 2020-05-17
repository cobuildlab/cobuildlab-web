import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { thLarge } from 'react-icons-kit/fa/thLarge';
import { columns as colIcon } from 'react-icons-kit/fa/columns';

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

const data = {
  'custom-ui': {
    name: 'custom-ui',
    min: 2000,
    max: 2500,
  },
  template: {
    name: 'template',
    min: 1000,
    max: 1500,
  },
};

const CalculatorSectionDesign = ({ onPlatformSelect }) => {
  const [currentPlatform, setCurrentPlatform] = useState(data['custom-ui']);

  const onClick = useCallback(
    (platform) => {
      setCurrentPlatform(platform);
    },
    [currentPlatform],
  );

  return (
    <Fragment>
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
                Select the platform to your project
              </CalculatorFeatureDescription>
            </CalculatorCell>
          </CalculatorLayoutDescripcion>
          <CalculatorLayoutCards>
            <CalculatorCell isDisplay="flex">
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'custom-ui'}
                data={data['custom-ui']}
                onSelect={onClick}>
                <Icon icon={thLarge} size={30} />
                <CalculatorFeatureName>Custom UI</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'template'}
                data={data['template']}
                onSelect={onClick}>
                <Icon icon={colIcon} size={30} />
                <CalculatorFeatureName>Template</CalculatorFeatureName>
              </CalculatorFeatureCard>
            </CalculatorCell>
          </CalculatorLayoutCards>
        </CalculatorLayoutLeftSection>
        <CalculatorLayoutRightSection>
          <CalculatorCell isDisplay="flex" isAlign="center" isBackground>
            <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
          </CalculatorCell>
        </CalculatorLayoutRightSection>
      </Columns>
    </Fragment>
  );
};

CalculatorSectionDesign.defaultProps = {
  onPlatformSelect: () => null,
};

CalculatorSectionDesign.propTypes = {
  onPlatformSelect: PropTypes.func,
};

export default CalculatorSectionDesign;
