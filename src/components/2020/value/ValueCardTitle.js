import React from 'react';
import PropTypes from 'prop-types';
import H4 from '../../Typography/H4';

const ValueCardTitle = ({ children }) => <H4>{children}</H4>;

ValueCardTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ValueCardTitle;
