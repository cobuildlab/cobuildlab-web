import React from 'react';
import styled from 'styled-components';
import H2 from '../../Typography/H2';

const Container = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ValueTitle = () => (
  <Container>
    <H2>Value</H2>
  </Container>
);

export default ValueTitle;
