import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Wrapper from './ImagesWrapper';
import { Dflex } from './common-styles';

const Container = styled.div`
  background: #fff;
  box-shadow: 0px 15px 30px #00000040;
  overflow: hidden;
  height: calc(400px - 1.5em);
  ${Dflex}
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
