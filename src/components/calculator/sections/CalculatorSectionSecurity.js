import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { envelope } from 'react-icons-kit/fa/envelope';
import { globe } from 'react-icons-kit/fa/globe';
import { codeFork } from 'react-icons-kit/fa/codeFork';

import CalculatorMultiSelectionFeature from './CalculatorMultiSelectionFeature';

const data = [
  {
    id: 1,
    name: 'email password',
    icon: envelope,
    min: 1400,
    max: 3500,
    isActive: false,
  },
  {
    id: 2,
    name: 'social networks',
    icon: globe,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 3,
    name: '2 factor',
    icon: codeFork,
    min: 570,
    max: 1400,
    isActive: false,
  },
];

const CalculatorSectionSecurity = ({ getCost }) => (
  <CalculatorMultiSelectionFeature
    title="Security"
    description="How do you wish to secure your app?"
    featureCost={getCost}
    data={data}
    featureId="security"
  />
);

CalculatorSectionSecurity.defaultProps = {
  getCost: () => null,
};

CalculatorSectionSecurity.propTypes = {
  getCost: PropTypes.func,
};

export default memo(CalculatorSectionSecurity);
