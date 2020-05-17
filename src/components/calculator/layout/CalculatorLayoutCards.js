import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'bloomer';

const CalculatorLayoutCards = ({ children }) => (
  <Column isSize={8} isPaddingless>
    {children}
  </Column>
);

CalculatorLayoutCards.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutCards;
