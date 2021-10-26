import React from 'react';
import styled from 'styled-components';
import background from '../../resources/2020/home/background.svg';
import PropTypes from 'prop-types';

const Overlay = styled.div`
  position: absolute;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BannerBackgroundStories = ({ style }) => (
  <Overlay style={style}>
    <img src={background} alt="" />
  </Overlay>
);

BannerBackgroundStories.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

BannerBackgroundStories.defaultProps = {
  style: {},
};

export default BannerBackgroundStories;
