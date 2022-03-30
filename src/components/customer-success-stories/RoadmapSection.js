import React from 'react';
import PropTypes from 'prop-types';
import DetailSubTitle from './DetailSubTitle';

const RoadmapSection = ({ children }) => (
  <div>
    <center>
      <DetailSubTitle isBold={false}>Roadmap</DetailSubTitle>
    </center>
    <center>{children}</center>
  </div>
);

RoadmapSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

RoadmapSection.defaultProps = {
  children: null,
};

export default RoadmapSection;
