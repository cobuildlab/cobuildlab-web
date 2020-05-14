import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
`;

const CalculatorFeatureCost = ({ cost }) => <Container>$ {cost}</Container>;

CalculatorFeatureCost.propTypes = {
  cost: PropTypes.string.isRequired,
};

export default CalculatorFeatureCost;
