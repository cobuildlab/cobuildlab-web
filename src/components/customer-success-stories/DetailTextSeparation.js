import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2.5em;
`;

const DetailTextSeparation = ({ children }) => <Container>{children}</Container>;

DetailTextSeparation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailTextSeparation;
