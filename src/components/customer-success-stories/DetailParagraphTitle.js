import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseTextColor } from '../Typography/common-styles';

const Container = styled.span`
  display: block;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
`;

const Title = styled.span`
  ${baseTextColor}
  font-size: 25px;
`;

const DetailsTitle = ({ children }) => (
  <Container>
    <Title>{children}</Title>
  </Container>
);

DetailsTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailsTitle;
