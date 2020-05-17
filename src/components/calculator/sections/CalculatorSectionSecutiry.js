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
  'email-password': {
    name: 'email-password',
    min: 1000,
    max: 2500,
  },
  'social-networks': {
    name: 'social-networks',
    min: 1000,
    max: 1500,
  },
  '2-factor': {
    name: '2-factor',
    min: 500,
    max: 1000,
  },
};

const CalculatorSectionSecutiry = ({ onPlatformSelect }) => {
  const [currentPlatform, setCurrentPlatform] = useState(data['email-password']);

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
              <CalculatorCellTitle indigo>Security</CalculatorCellTitle>
            </CalculatorCell>
          </CalculatorLayoutCellTitle>
          <CalculatorLayoutDescripcion>
            <CalculatorCell isDisplay="flex" isAlign="center" isJustify="center">
              <CalculatorFeatureDescription>
                How do you wish to secure your app?
              </CalculatorFeatureDescription>
            </CalculatorCell>
          </CalculatorLayoutDescripcion>
          <CalculatorLayoutCards>
            <CalculatorCell isDisplay="flex">
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'email-password'}
                data={data['email-password']}
                onSelect={onClick}>
                <Icon icon={android} size={30} />
                <CalculatorFeatureName>Email & Password</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard
                isActive={currentPlatform.name === 'social-networks'}
                data={data['social-networks']}
                onSelect={onClick}>
                <Icon icon={apple} size={30} />
                <CalculatorFeatureName>Social Networks</CalculatorFeatureName>
              </CalculatorFeatureCard>
              <CalculatorFeatureCard
                isActive={currentPlatform.name === '2-factor'}
                data={data['2-factor']}
                onSelect={onClick}>
                <Icon icon={globe} size={30} />
                <CalculatorFeatureName>2-Factor</CalculatorFeatureName>
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

CalculatorSectionSecutiry.defaultProps = {
  onPlatformSelect: () => null,
};

CalculatorSectionSecutiry.propTypes = {
  onPlatformSelect: PropTypes.func,
};

export default CalculatorSectionSecutiry;
