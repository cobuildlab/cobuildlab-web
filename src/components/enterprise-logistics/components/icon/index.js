import React from 'react';
import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';

/**
 * Preview.
 *
 * @param {string} props - The Icon props.
 * @returns {*} - The Component.
 * @class
 */
function PreviewIcon(props) {
  return <Icon icon={props.icon} size={24} />;
}

PreviewIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default PreviewIcon;
