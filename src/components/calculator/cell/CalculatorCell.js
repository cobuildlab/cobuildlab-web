import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withHelpersModifiers } from 'bloomer';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  background-color: ${({ isBackground }) => (isBackground ? '#d05b1b' : 'transparent')};
  justify-content: ${({ isJustify }) => isJustify || 'flex-start'};
  align-items: ${({ isAlign }) => isAlign || 'flex-start'};
  flex-wrap: wrap;
`;

const CalculatorCell = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;

CalculatorCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withHelpersModifiers(CalculatorCell);
