import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'bloomer';

const CalculatorLayoutCellTitle = ({ children }) => (
  <Column isSize={12} isPaddingless>
    {children}
  </Column>
);

CalculatorLayoutCellTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutCellTitle;
