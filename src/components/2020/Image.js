import React from 'react';
import PropTypes from 'prop-types';
import componse from '../../utils/styles-componse';

const Image = ({ src, alt, className, height, width }) => (
  <img
    src={src}
    alt={alt}
    className={componse('image-fluid', className)}
    height={height}
    width={width}
  />
);

Image.defaultProps = {
  src: '',
  alt: '',
  className: '',
  height: '',
  width: '',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Image;
