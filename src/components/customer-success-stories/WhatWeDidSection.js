import React from 'react';
import styled from 'styled-components';
import DetailSubTitle from './DetailSubTitle';
import PropTypes from 'prop-types';
import { TextOrange } from '../2021/text/TextHelpers';
import { Section } from 'bloomer';

const LightSection = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 13px 15px 5px #00000024;
  position: relative;
`;

const WhatWeDidSection = ({ logicalArchitecture, physicalArchitecture, roadmap }) => (
  <LightSection>
    <Section>
      <center>
        <DetailSubTitle>
          What <TextOrange> We Did </TextOrange>
        </DetailSubTitle>
      </center>
      {logicalArchitecture}
      {physicalArchitecture}
      {roadmap}
    </Section>
  </LightSection>
);

WhatWeDidSection.propTypes = {
  logicalArchitecture: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  physicalArchitecture: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  roadmap: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

WhatWeDidSection.defaultProps = {
  logicalArchitecture: null,
  physicalArchitecture: null,
  roadmap: null,
};

export default WhatWeDidSection;
