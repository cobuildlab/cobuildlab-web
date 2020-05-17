import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  margin: 0 auto;
  &:before {
    content: '$';
    color: #fff;
  }
`;

const CalculatorFeatureCost = ({ max, min }) => (
  <Container>
    {min} - {max}
  </Container>
);

CalculatorFeatureCost.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CalculatorFeatureCost;
