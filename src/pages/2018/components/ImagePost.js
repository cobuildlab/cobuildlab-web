import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column, Image } from 'bloomer';

class ImagePost extends React.Component {
  static defaultProps = {
    src: '',
  };

  static propTypes = {
    src: PropTypes.string,
  };

  render() {
    const { src } = this.props;
    return (
      <Container>
        <Columns>
          <Column>
            <Image isRatio="1:1" src={src} />
          </Column>
        </Columns>
      </Container>
    );
  }
}
export default ImagePost;
