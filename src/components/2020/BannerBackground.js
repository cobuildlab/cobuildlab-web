import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';

const Overlay = styled.div`
  position: absolute;
  top: 15%;
  left: -35%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

class BannerBackground extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      ...this.props,
      ...Overlay.defaultProps,
    };
  }

  render() {
    return (
      <Overlay {...this.props}>
        <img src={background} alt="" />
      </Overlay>
    );
  }
}

BannerBackground.propTypes = {
  ...Overlay.propTypes,
};

BannerBackground.defaultProps = {
  ...Overlay.defaultProps,
};

export default BannerBackground;
