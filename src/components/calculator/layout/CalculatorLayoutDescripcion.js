import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'bloomer';

const CalculatorLayoutDescripcion = ({ children }) => (
  <Column isSize={4} isPaddingless isDisplay="flex">
    {children}
  </Column>
);

CalculatorLayoutDescripcion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutDescripcion;
