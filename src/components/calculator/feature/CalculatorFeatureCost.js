import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  font-size: 36px;
  color: #406073;
  font-weight: bold;
  text-align: center;
  width: 100%;
  &:before {
    content: '$';
    color: #406073;
    padding-right: 5px;
  }
`;

const CalculatorFeatureCost = ({ max, min }) => {
  if (max === 0 && min === 0) {
    return <Container>0</Container>;
  }

  return (
    <Container>
      {min} - {max}
    </Container>
  );
};

CalculatorFeatureCost.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CalculatorFeatureCost;
