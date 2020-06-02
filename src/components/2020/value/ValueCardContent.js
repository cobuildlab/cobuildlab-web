import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../Typography/Paragraph';

const Container = styled.div`
  padding-top: 1rem;
`;

const Text = styled(Paragraph)`
  line-height: 1.3;
`;

const ValueCardContent = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

ValueCardContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ValueCardContent;
