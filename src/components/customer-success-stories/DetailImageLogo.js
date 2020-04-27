import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 15px 30px #00000040;
  overflow: hidden;
  height: calc(400px - 1.5em);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: inline;
`;

const DetailImageLogo = ({ src }) => (
  <Container>
    <Wrapper>
      <Img fluid={src} alt="logo" />
    </Wrapper>
  </Container>
);

DetailImageLogo.propTypes = {
  src: PropTypes.object.isRequired,
};

export default DetailImageLogo;
