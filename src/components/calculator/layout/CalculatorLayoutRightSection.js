import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'bloomer';

const CalculatorLayoutRightSection = ({ children }) => (
  <Column isSize={3} isPaddingless>
    {children}
  </Column>
);

CalculatorLayoutRightSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutRightSection;
