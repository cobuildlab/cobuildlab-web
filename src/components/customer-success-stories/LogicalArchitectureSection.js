import React from 'react';
import PropTypes from 'prop-types';
import DetailSection from './new/DetailSection';
import DetailSubTitle from './DetailSubTitle';

const LogicalArchitectureSection = ({ children, image }) => (
  <DetailSection image={image}>
    <DetailSubTitle isBold={false}>Logical Architecture</DetailSubTitle>
    {children}
  </DetailSection>
);

LogicalArchitectureSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  image: PropTypes.node,
};

LogicalArchitectureSection.defaultProps = {
  children: null,
  image: null,
};

export default LogicalArchitectureSection;
