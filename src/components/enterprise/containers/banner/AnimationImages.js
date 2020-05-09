import React from 'react';
import PropTypes from 'prop-types';

const AnimationImages = ({ node, index }) => (
  <span className={`image${index + 1}`}>
    <img
      alt=""
      src={node.childImageSharp.resolutions.src}
      width={node.childImageSharp.resolutions.width}
      height={node.childImageSharp.resolutions.height}
    />
  </span>
);

AnimationImages.propTypes = {
  node: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimationImages;
