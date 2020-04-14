import React from 'react';
import { Container, Columns, Column, Image } from 'bloomer';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <Container>
        <Columns>
          <Column>
            <Image isRatio="16:9" src={src} />
          </Column>
        </Columns>
      </Container>
    );
  }
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Banner;
