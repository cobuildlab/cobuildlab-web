import React from 'react';
import DetailSection from './new/DetailSection';
import DetailSubTitle from './DetailSubTitle';
import PropTypes from 'prop-types';

const PhysicalArchitectureSection = ({ children, image }) => (
  <DetailSection image={image} left>
    <DetailSubTitle isBold={false}>Physical Architecture</DetailSubTitle>
    {children}
  </DetailSection>
);

PhysicalArchitectureSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  image: PropTypes.node,
};

PhysicalArchitectureSection.defaultProps = {
  children: null,
  image: null,
};

export default PhysicalArchitectureSection;
