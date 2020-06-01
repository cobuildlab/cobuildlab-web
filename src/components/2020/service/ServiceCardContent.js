import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../../Typography/Paragraph';

const Container = styled.div`
  padding-top: 1rem;
`;

const ServiceCardContent = ({ children }) => (
  <Container>
    <Paragraph>{children}</Paragraph>
  </Container>
);

ServiceCardContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServiceCardContent;
