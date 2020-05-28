import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { android } from 'react-icons-kit/fa/android';
import { apple } from 'react-icons-kit/fa/apple';
import { globe } from 'react-icons-kit/fa/globe';

import CalculatorSingleSelectionFeature from './CalculatorSingleSelectionFeature';

const data = [
  {
    id: 1,
    name: 'android',
    icon: android,
    min: 1500,
    max: 2500,
    isActive: false,
  },
  {
    id: 2,
    name: 'apple',
    icon: apple,
    min: 1500,
    max: 2500,
    isActive: false,
  },
  {
    id: 3,
    name: 'cross platform',
    icon: globe,
    min: 2000,
    max: 2800,
    isActive: false,
  },
];

const CalculatorSectionPlatform = ({ getCost }) => (
  <CalculatorSingleSelectionFeature
    title="Platform"
    description="Select the platform to your project"
    data={data}
    featureCost={getCost}
    featureId="platform"
  />
);

CalculatorSectionPlatform.defaultProps = {
  getCost: () => null,
};

CalculatorSectionPlatform.propTypes = {
  getCost: PropTypes.func,
};

export default memo(CalculatorSectionPlatform);
