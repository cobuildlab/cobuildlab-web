import React from 'react';
import { Columns, Column as ColumnBloomer } from 'bloomer';
import styled from 'styled-components';
import CalculatorCellTitle from '../cell/CalculatorCellTitle';
import CalculatorCell from '../cell/CalculatorCell';

const Column = styled(ColumnBloomer)`
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 768px) {
    border-bottom: none;
  }
`;

const CalculatorHeader = () => (
  <Columns isMarginless isHidden="mobile">
    <Column isOffset={9} isSize={3} isPaddingless>
      <CalculatorCell isDisplay="flex" isBackground>
        <CalculatorCellTitle>Amount</CalculatorCellTitle>
      </CalculatorCell>
    </Column>
  </Columns>
);

export default CalculatorHeader;
