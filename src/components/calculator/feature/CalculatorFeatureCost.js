import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Currency } from './../../../utils/Currency';

const Container = styled.span`
  font-size: 33px;
  color: #406073;
  font-weight: bold;
  text-align: center;
  width: 100%;
  &:before {
    color: #406073;
    padding-right: 5px;
  }
`;

const CalculatorFeatureCost = ({ max, min }) => {
  if (max === 0 && min === 0) {
    return <Container>{Currency(0)}</Container>;
  }

  return (
    <Container>
      {Currency(min)} - {Currency(max)}
    </Container>
  );
};

CalculatorFeatureCost.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CalculatorFeatureCost;
