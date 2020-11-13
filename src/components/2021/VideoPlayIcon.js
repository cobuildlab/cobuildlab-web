import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { play } from 'react-icons-kit/fa/play';
import VideoPlay from './VideoPlay';
import styled, { keyframes } from 'styled-components';

const PlayIconContainer = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  z-index: 10;
  cursor: pointer;
`;

const SonarEmitter = styled.div`
  position: relative;
  wmargin: 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 9999px;
  background-color: hsla(21, 79%, 53%, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const waves = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    transform: scale(3);
    opacity: 0;
  }
`;

const SonarWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: hsla(21, 79%, 53%, 1);
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  animation: ${waves} 2s linear infinite;
`;

const IconPlay = styled(Icon)`
  color: #fff;
`;

const VideoPlayIcon = ({ videoId }) => (
  <VideoPlay videoId={videoId}>
    <PlayIconContainer>
      <SonarEmitter>
        <IconPlay size={34} icon={play} />
      </SonarEmitter>
      <SonarWave />
    </PlayIconContainer>
  </VideoPlay>
);

VideoPlayIcon.defaultProps = {
  videoId: 'AlU5h2xrQ5M',
};

VideoPlayIcon.propTypes = {
  videoId: PropTypes.string,
};

export default VideoPlayIcon;
