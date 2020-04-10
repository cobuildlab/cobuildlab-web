import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4.5em;
`;

const DetailContentSeparation = ({ children }) => <Container>{children}</Container>;

DetailContentSeparation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailContentSeparation;
