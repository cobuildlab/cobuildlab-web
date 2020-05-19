import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../Typography/Paragraph';

const Container = styled.div`
  margin-bottom: 0.5em;
`;

const Text = styled(Paragraph)`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`;

const ServicesSubTitle = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

ServicesSubTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServicesSubTitle;
