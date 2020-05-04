import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 15px 30px #00000040;
  margin-left: auto;
  margin-bottom: 1em;
  max-width: 450px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0em;
  }
`;

const DetailHeroRightContainer = ({ children }) => <Container>{children}</Container>;

DetailHeroRightContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default DetailHeroRightContainer;
