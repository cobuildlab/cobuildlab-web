import React from 'react';
import { Icon } from 'react-icons-kit';
import { play } from 'react-icons-kit/fa/play';
import VideoPlay from '../VideoPlay';
import styled, { keyframes } from 'styled-components';
import styles from './css/index.module.scss';



const PlayIconContainer = styled.div`
  position: absolute;
  top: calc(50% + 35px);
  left: calc(50% - 70px);
  width: 70px;
  height: 70px;
  z-index: 100;
  cursor: pointer;
  @media screen and (max-width: 768px){
    left: calc(50% - 35px);
  }
`;

const SonarEmitter = styled.div`
  position: relative;
  margin: 0 auto;
  width:  70px;
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



//TODO move this to other file and use styled components
const HeroPlayIcon = () => (
  <VideoPlay>
    <PlayIconContainer>
      <SonarEmitter>
        <Icon size={34} icon={play} className={styles.hero_icon} />
      </SonarEmitter>
      <SonarWave />
    </PlayIconContainer>
  </VideoPlay>
);


export default HeroPlayIcon;