import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from '../Typography/H2';

const Container = styled.div`
  margin-bottom: 1em;
`;

const ServicesTitle = ({ children }) => (
  <Container>
    <H2>
      <h1>{children}</h1>
    </H2>
  </Container>
);

ServicesTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServicesTitle;
