import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.color};
  box-shadow: 0px 15px 30px #00000040;
  margin-left: auto;
  margin-bottom: 1em;
  max-width: 450px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 0em;
  }
`;

const DetailHeroRightContainer = ({ children, color }) => (
  <Container color={color}>{children}</Container>
);

DetailHeroRightContainer.defaultProps = {
  color: '#fff',
};

DetailHeroRightContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  color: PropTypes.string,
};

export default DetailHeroRightContainer;
