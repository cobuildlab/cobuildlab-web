import React from 'react';
import PropTypes from 'prop-types';

const AnimationImages = ({ src, width, height, index }) => (
  <span className={`image${index + 1}`}>
    <img alt="" src={src} width={width} height={height} />
  </span>
);

AnimationImages.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimationImages;
