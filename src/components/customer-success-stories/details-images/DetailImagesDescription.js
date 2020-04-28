import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2.5em;
  box-shadow: 0px 15px 30px #00000040;
`;

const DetailImagesDescription = ({ src }) => (
  <Container>
    <Img fluid={src} alt="" />
  </Container>
);

DetailImagesDescription.propTypes = {
  src: PropTypes.object.isRequired,
};

export default DetailImagesDescription;
