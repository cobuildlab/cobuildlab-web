import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H6 from '../Typography/H6';

const Container = styled.div`
  margin-bottom: 1.5em;
`;


const DetailsTitle = ({ children }) => (
  <Container>
    <H6>
      {children}
    </H6>
  </Container>
);

DetailsTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};

export default DetailsTitle;
