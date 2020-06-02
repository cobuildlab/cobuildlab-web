import React from 'react';
import styled from 'styled-components';
import ButtonDefault from '../Button/ButtonDefault';

const Container = styled.div`
  padding-top: 1.5rem;
`;

const ValueCardFooter = () => (
  <Container>
    <ButtonDefault to="/#contact">Contact US!</ButtonDefault>
  </Container>
);

export default ValueCardFooter;
