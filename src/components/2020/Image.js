import React from 'react';
import PropTypes from 'prop-types';
import componse from '../../utils/styles-componse';

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={componse('image-fluid', className)} />
);

Image.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
