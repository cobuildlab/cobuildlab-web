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
    min: 2100,
    max: 3500,
    isActive: false,
  },
  {
    id: 2,
    name: 'apple',
    icon: apple,
    min: 2100,
    max: 3500,
    isActive: false,
  },
  {
    id: 3,
    name: 'cross platform',
    icon: globe,
    min: 2800,
    max: 3920,
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
