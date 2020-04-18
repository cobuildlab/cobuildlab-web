import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  display: inline;
  padding: 0.25em 0;
  font-weight: bold;
  font-size: 16px;
  color: #406073;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-weight: lighter;
`;

const Container = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5em;
`;

const OtherProjects = () => (
  <Container>
    <List>Okroo</List>
    <List>Balz</List>
    <List>TuVueloVip</List>
    <List>other</List>
    <List>other</List>
  </Container>
);

export default OtherProjects;
