import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import styled from 'styled-components';
import CalculatorCellTitle from '../cell/CalculatorCellTitle';
import CalculatorCell from '../cell/CalculatorCell';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

const CalculatorFooter = ({ max, min }) => (
  <Wrapper>
    <Columns isMarginless isMultiline>
      <Column isOffset={{ desktop: 6 }} isSize={{ mobile: 12, desktop: 3 }}>
        <CalculatorCell>
          <CalculatorCellTitle indigo>Total Amount</CalculatorCellTitle>
        </CalculatorCell>
      </Column>
      <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
        <CalculatorCell isDisplay="flex" isBackground>
          <CalculatorFeatureCost max={max} min={min} />
        </CalculatorCell>
      </Column>
    </Columns>
  </Wrapper>
);

CalculatorFooter.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CalculatorFooter;
