import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Wrapper from './ImagesWrapper';
import { Dflex } from './common-styles';

const Container = styled.div`
  padding: 1em;
  height: 100%;
  ${Dflex}
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
