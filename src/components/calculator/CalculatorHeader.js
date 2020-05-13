import React from 'react';
import styled from 'styled-components';
import H4 from '../Typography/H4';

const Container = styled(H4)`
  width: 100%;
  height: 100%;
  background-color: #264a60;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Text = styled.span`
  color: #fff;
  font-size: 24px;
`;

const CalculatorHeader = () => (
  <Container>
    <Text>Amount</Text>
  </Container>
);

export default CalculatorHeader;
