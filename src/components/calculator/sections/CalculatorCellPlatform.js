import React, { Fragment, useState, useCallback } from 'react';
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

const data = {
  android: {
    name: 'android',
    min: 1500,
    max: 2500,
  },
  apple: {
    name: 'apple',
    min: 1500,
    max: 2500,
  },
  'cross-platform': {
    name: 'cross-platform',
    min: 2000,
    max: 2800,
  },
};

const CalculatorCellPlatform = ({ onPlatformSelect }) => {
  const [currentPlatform, setCurrentPlatform] = useState(data.android);

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
            <CalculatorCell isDisplay="flex">
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'android'}
                data={data['android']}
                onSelect={onClick}>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Android</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'apple'}
                data={data['apple']}
                onSelect={onClick}>
                <Icon icon={apple} size={30} />
                <CalculatorFeatureName>Apple</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'cross-platform'}
                data={data['cross-platform']}
                onSelect={onClick}>
                <Icon icon={globe} size={30} />
                <CalculatorFeatureName>Cross-platform</CalculatorFeatureName>
              </CalculatorFeatureCard>
            </CalculatorCell>
          </CalculatorLayoutCards>
        </CalculatorLayoutLeftSection>
        <CalculatorLayoutRightSection>
          <CalculatorCell isDisplay="flex" isBackground>
            <CalculatorCellTitle isHidden="mobile">Amount</CalculatorCellTitle>
            <CalculatorFeatureCost max={currentPlatform.max} min={currentPlatform.min} />
          </CalculatorCell>
        </CalculatorLayoutRightSection>
      </Columns>
    </Fragment>
  );
};

CalculatorCellPlatform.defaultProps = {
  onPlatformSelect: () => null,
};

CalculatorCellPlatform.propTypes = {
  onPlatformSelect: PropTypes.func,
};

export default CalculatorCellPlatform;
