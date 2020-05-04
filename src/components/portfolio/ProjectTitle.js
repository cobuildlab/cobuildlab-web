import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H3 from '../Typography/H3';
import ProjectType from './ProjectType';

const Container = styled.div`
  margin-top: 3em;
  margin-bottom: 1.5em;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled(H3)`
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const ProjectTitle = ({ children, type }) => (
  <Container>
    <Title>{children}</Title>
    <ProjectType type={type} />
  </Container>
);

ProjectTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.array.isRequired,
};

export default ProjectTitle;
