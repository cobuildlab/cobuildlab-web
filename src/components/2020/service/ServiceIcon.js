import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1em;
  width: 100%;
  max-height: 72px;
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

const ServiceIcon = ({ src }) => (
  <Container>
    <img src={src} alt="" />
  </Container>
);

ServiceIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ServiceIcon;
