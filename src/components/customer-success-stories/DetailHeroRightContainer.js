import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 1.5em;
  @media screen and (max-width: 768px) {
    padding: 0em;
  }
`;

const DetailHeroRightContainer = ({ children }) => <Container>{children}</Container>;

DetailHeroRightContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailHeroRightContainer;
