import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { creditCardAlt } from 'react-icons-kit/fa/creditCardAlt';
import { globe } from 'react-icons-kit/fa/globe';
import { comments } from 'react-icons-kit/fa/comments';
import { bell } from 'react-icons-kit/fa/bell';
import { desktop } from 'react-icons-kit/fa/desktop';
import { list } from 'react-icons-kit/fa/list';
import { barChart } from 'react-icons-kit/fa/barChart';
import { commentO } from 'react-icons-kit/fa/commentO';
import { camera } from 'react-icons-kit/fa/camera';
import { map } from 'react-icons-kit/fa/map';

import CalculatorMultiSelectionFeature from './CalculatorMultiSelectionFeature';

const data = [
  {
    id: 0,
    name: 'Payments',
    icon: creditCardAlt,
    min: 1000,
    max: 1500,
    isActive: false,
  },
  {
    id: 1,
    name: 'Geolocalization',
    icon: globe,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 2,
    name: 'chat',
    icon: comments,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 3,
    name: 'Notifications',
    icon: bell,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 4,
    name: 'Backoffice',
    icon: desktop,
    min: 3500,
    max: 5300,
    isActive: false,
  },
  {
    id: 5,
    name: 'Reports',
    icon: list,
    min: 2800,
    max: 3500,
    isActive: false,
  },
  {
    id: 6,
    name: 'Analitycs',
    icon: barChart,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 7,
    name: 'Comments',
    icon: commentO,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 8,
    name: 'Camera',
    icon: camera,
    min: 1400,
    max: 2100,
    isActive: false,
  },
  {
    id: 9,
    name: 'Maps',
    icon: map,
    min: 2800,
    max: 6300,
    isActive: false,
  },
];

const CalculatorSectionAdditionalFeatures = ({ getCost }) => (
  <CalculatorMultiSelectionFeature
    title="Additional Features"
    description="Additional services for your project"
    featureCost={getCost}
    data={data}
    featureId="additional feature"
  />
);

CalculatorSectionAdditionalFeatures.defaultProps = {
  getCost: () => null,
};

CalculatorSectionAdditionalFeatures.propTypes = {
  getCost: PropTypes.func,
};

export default memo(CalculatorSectionAdditionalFeatures);
