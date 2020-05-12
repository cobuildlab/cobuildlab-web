import React from 'react';
import PropTypes from 'prop-types';
import { Container as BloomerContainer } from 'bloomer';
import styled from 'styled-components';

const Container = styled(BloomerContainer)`
  width: 100%;
`;

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  padding: 56px 78px;
`;

const CalculatorContainer = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

CalculatorContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CalculatorContainer;
