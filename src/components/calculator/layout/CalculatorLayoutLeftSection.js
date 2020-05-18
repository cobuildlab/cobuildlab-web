import React from 'react';
import PropTypes from 'prop-types';
import { Column, Columns } from 'bloomer';
import styled from 'styled-components';

const Wrapper = styled(Column)`
  border-bottom: 1px solid #90a2ad;
  padding-top: 30px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    border-bottom: none;
    padding-top: 30px;
    padding-bottom: 0;
  }
`;

const CalculatorLayoutLeftSection = ({ children }) => (
  <Wrapper isSize={9}>
    <Columns isMultiline isPaddingless>
      {children}
    </Columns>
  </Wrapper>
);

CalculatorLayoutLeftSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorLayoutLeftSection;
