import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { globe } from 'react-icons-kit/fa/globe';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { photo } from 'react-icons-kit/fa/photo';
import { tasks } from 'react-icons-kit/fa/tasks';

import CalculatorMultiSelectionFeature from './CalculatorMultiSelectionFeature';

const data = [
  {
    id: 1,
    name: 'social network',
    icon: globe,
    min: 5600,
    max: 8400,
    isActive: false,
  },
  {
    id: 2,
    name: 'eCommerce',
    icon: shoppingCart,
    min: 4900,
    max: 7700,
    isActive: false,
  },
  {
    id: 3,
    name: 'media manager',
    icon: photo,
    min: 4200,
    max: 7000,
    isActive: false,
  },
  {
    id: 4,
    name: 'content manager',
    icon: tasks,
    min: 5600,
    max: 7700,
    isActive: false,
  },
];

const CalculatorSectionData = ({ getCost }) => (
  <CalculatorMultiSelectionFeature
    title="Data"
    description="Integrate which this 3rd party services"
    featureCost={getCost}
    data={data}
    featureId="data"
  />
);

CalculatorSectionData.defaultProps = {
  getCost: () => null,
};

CalculatorSectionData.propTypes = {
  getCost: PropTypes.func,
};

export default memo(CalculatorSectionData);
