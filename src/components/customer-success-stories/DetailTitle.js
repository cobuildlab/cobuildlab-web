import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1 from '../Typography/H1';
import { TextOrange } from '../Typography/TextHelpers';

const Container = styled.div`
  margin-bottom: 1.5em;
`;

const DetailsTitle = ({ children }) => (
  <Container>
    <H1>
      <TextOrange>{children}</TextOrange>
    </H1>
  </Container>
);

DetailsTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailsTitle;
