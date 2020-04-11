import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const DetailImage = ({ src, alt }) => (
  <Container>
    <Image src={src} alt={alt} />
  </Container>
);

DetailImage.defaultProps = {
  alt: '',
};

DetailImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default DetailImage;
