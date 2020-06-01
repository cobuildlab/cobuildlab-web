import React from 'react';
import PropTypes from 'prop-types';
import H6 from '../../Typography/H6';

const ServiceCardTitle = ({ children }) => <H6>{children}</H6>;

ServiceCardTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServiceCardTitle;
