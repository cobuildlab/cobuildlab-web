import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H4 from '../Typography/H4';

const Container = styled.div`
  margin-bottom: 1.5em;
`;

const Title = styled(H4)`
  font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
  & > strong {
    padding: 0 0.2em;
  }
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
