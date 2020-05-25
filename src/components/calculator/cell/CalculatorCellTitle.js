import React from 'react';
import PropTypes from 'prop-types';
import { withHelpersModifiers } from 'bloomer';
import styled from 'styled-components';

const Container = styled.span`
  color: #406073;
  font-size: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalculatorCellTitle = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

CalculatorCellTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withHelpersModifiers(CalculatorCellTitle);
