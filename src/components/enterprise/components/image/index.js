import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {object} props - The props.
 * @returns {*} - The component.
 * @class
 */
function Image(props) {
  return <img src={props.Path} className={props.Class} title={props.Title} alt={props.Alt}/>;
}

Image.propTypes = {
  Path: PropTypes.string.isRequired,
  Class: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Alt: PropTypes.string.isRequired
};
export default Image;
