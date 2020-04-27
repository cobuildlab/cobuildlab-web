import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline;
  width: 100%;
`;

const DetailImage = ({ src }) => (
  <Container>
    <Wrapper>
      <Img fluid={src} alt="" />
    </Wrapper>
  </Container>
);

DetailImage.propTypes = {
  src: PropTypes.object.isRequired,
};

export default DetailImage;
