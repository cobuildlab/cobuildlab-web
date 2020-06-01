import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkButtonDefault from '../Button/LinkButtonDefault';

const Container = styled.div`
  margin-top: 3em;
`;

const ServiceFooter = ({ to }) => (
  <Container>
    <LinkButtonDefault to={to}>Read More</LinkButtonDefault>
  </Container>
);

ServiceFooter.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ServiceFooter;
