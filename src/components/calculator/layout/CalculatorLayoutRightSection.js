import React from 'react';
import PropTypes from 'prop-types';
import { Column } from 'bloomer';
import styled from 'styled-components';

const Wrapper = styled(Column)`
  border-bottom: 1px solid #406073;
`;

const CalculatorLayoutRightSection = ({ children }) => (
  <Wrapper isSize={3} isPaddingless>
    {children}
  </Wrapper>
);

CalculatorLayoutRightSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutRightSection;
