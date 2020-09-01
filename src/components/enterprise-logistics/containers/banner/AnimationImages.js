import React from 'react';
import PropTypes from 'prop-types';

const AnimationImages = ({ src, index }) => (
  <span className={`image${index + 1}`}>
    <img alt="" src={src} />
  </span>
);

AnimationImages.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimationImages;
