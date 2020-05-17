import React from 'react';
import PropTypes from 'prop-types';
import { withHelpersModifiers } from 'bloomer';
import styled from 'styled-components';

const Container = styled.span`
  color: ${({ indigo }) => (indigo ? '#264a60' : '#fff')};
  font-size: 28px;
  width: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CalculatorCellTitle = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

CalculatorCellTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withHelpersModifiers(CalculatorCellTitle);
