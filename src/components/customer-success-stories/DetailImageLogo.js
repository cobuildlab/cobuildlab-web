import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 15px 30px #00000040;
  overflow: hidden;
  height: calc(400px - 1.5em);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const DetailImageLogo = ({ src }) => (
  <Container>
    <Image src={src} alt="logo" />
  </Container>
);

DetailImageLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default DetailImageLogo;
