import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { thLarge } from 'react-icons-kit/fa/thLarge';
import { columns as colIcon } from 'react-icons-kit/fa/columns';

import CalculatorSingleSelectionFeature from './CalculatorSingleSelectionFeature';

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

const CalculatorSectionDesign = ({ getCost }) => (
  <CalculatorSingleSelectionFeature
    title="Design"
    description="What would your UI theme be?"
    featureCost={getCost}
    data={data}
    featureId="design"
  />
);

CalculatorSectionDesign.defaultProps = {
  getCost: () => null,
};

CalculatorSectionDesign.propTypes = {
  getCost: PropTypes.func,
};

export default memo(CalculatorSectionDesign);
