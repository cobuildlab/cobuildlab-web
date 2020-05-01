import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H3 from '../Typography/H3';

const Container = styled.div`
  margin-top: 3em;
  margin-bottom: 1em;
`;

const ProjectTitle = ({ children }) => (
  <Container>
    <H3>{children}</H3>
  </Container>
);

ProjectTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ProjectTitle;
