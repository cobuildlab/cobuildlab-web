import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 0.5em;
`;

const Text = styled.span`
  font-size: 16px;
  text-align: center;
  display: block;
  padding: 0 0.5em;
  color: inherit;
  text-transform: capitalize;
`;

const CalculatorFatureCaption = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

CalculatorFatureCaption.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorFatureCaption;
