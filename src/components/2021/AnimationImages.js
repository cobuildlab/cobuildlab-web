import React from 'react';
import PropTypes from 'prop-types';

const AnimationImages = ({ src, index, height, width }) => (
  <span className={`image${index + 1}`}>
    <img alt="" src={src} height={height} width={width} />
  </span>
);

AnimationImages.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default AnimationImages;
