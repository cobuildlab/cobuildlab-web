import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import CalculatorCellTitle from '../cell/CalculatorCellTitle';
import CalculatorCell from '../cell/CalculatorCell';
import CalculatorFeatureCost from '../feature/CalculatorFeatureCost';

const CalculatorFooter = ({ max, min }) => (
  <Columns isMarginless isMultiline>
    <Column isSize={{ mobile: 12, desktop: 9 }} isPaddingless>
      <CalculatorCell>
        <CalculatorCellTitle indigo>Total</CalculatorCellTitle>
      </CalculatorCell>
    </Column>
    <Column isSize={{ mobile: 12, desktop: 3 }} isPaddingless>
      <CalculatorCell isDisplay="flex" isBackground>
        <CalculatorFeatureCost max={max} min={min} />
      </CalculatorCell>
    </Column>
  </Columns>
);

CalculatorFooter.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default CalculatorFooter;
