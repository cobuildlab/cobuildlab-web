import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from '../Typography/H2';

const Container = styled.div`
  text-align: center;
  margin-top: 3em;
  margin-bottom: 2.5em;
`;

const ProjectTitle = ({ children }) => (
  <Container>
    <H2>{children}</H2>
  </Container>
);

ProjectTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ProjectTitle;
