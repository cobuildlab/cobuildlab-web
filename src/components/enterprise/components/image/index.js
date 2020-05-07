import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {object} props - The props.
 * @returns {*} - The component.
 * @class
 */
function Image(props) {
  return <img src={props.Path} className={props.Class} title={props.Title} alt={props.Alt} />;
}

Image.defaultProps = {
  Path: '',
  Class: '',
  Title: '',
  Alt: '',
};

Image.propTypes = {
  Path: PropTypes.string,
  Class: PropTypes.string,
  Title: PropTypes.string,
  Alt: PropTypes.string,
};
export default Image;
