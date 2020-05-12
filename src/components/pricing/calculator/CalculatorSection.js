import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Column } from 'bloomer';
import H4 from '../../Typography/H4';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
  border-bottom: 1px solid #264a60;
`;

const Text = styled.span`
  margin-bottom: 0 !important;
  font-size: 34px;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #264a60;
`;

const ColumnTitle = ({ isSize, children }) => (
  <Column isSize={isSize}>
    <Text>{children}</Text>
  </Column>
);

ColumnTitle.defaultProps = {
  isSize: {},
};

ColumnTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isSize: PropTypes.object,
};

const Title = ({ isSize, children }) => (
  <Column isSize={isSize}>
    <H4>{children}</H4>
  </Column>
);

Title.defaultProps = {
  isSize: {},
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isSize: PropTypes.object,
};

const Section = ({ children }) => (
  <Container>
    <Columns>{children}</Columns>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default {
  Section,
  Title,
  ColumnTitle,
};
