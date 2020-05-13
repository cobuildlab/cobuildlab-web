import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: #264a60;
  font-size: 28px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CalculatorCellTitle = () => <Text>Amount</Text>;

export default CalculatorCellTitle;
