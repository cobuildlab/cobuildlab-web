import React from 'react';
import PropTypes from 'prop-types';
import { Column, Columns } from 'bloomer';

const CalculatorLayoutLeftSection = ({ children }) => (
  <Column isSize={9}>
    <Columns isMultiline>{children}</Columns>
  </Column>
);

CalculatorLayoutLeftSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutLeftSection;
