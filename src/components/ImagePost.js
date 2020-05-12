import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Image } from 'bloomer';

const ImagePost = ({ src }) => (
  <Container>
    <Columns>
      <Column>
        <Image isRatio="1:1" src={src} />
      </Column>
    </Columns>
  </Container>
);

ImagePost.defaultProps = {
  src: '',
};

ImagePost.propTypes = {
  src: PropTypes.string,
};

export default ImagePost;
