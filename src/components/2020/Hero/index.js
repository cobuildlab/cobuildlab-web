import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Column, Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import ModalVideo from 'react-modal-video';
import { play } from 'react-icons-kit/fa/play';
import Button from '../Button';
import Image from '../Image';
import background from '../../../resources/2020/home/background.svg';
import comic from '../../../resources/2020/home/cobuildlab-home.svg';
import styles from './css/index.module.scss';
import Hero from '../../Typography/H1';
import H6 from '../../Typography/H6';
import Paragraph from '../../Typography/Paragraph';
import { TextOrange } from '../../Typography/TextHelpers';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  padding: 1em 0;
`;

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

//TODO move this to other file and use styled components
const PlayIcon = ({ onClick }) => (
  <PlayIconContainer onClick={onClick}>
    <SonarEmitter>
      <Icon size={34} icon={play} className={styles.hero_icon} />
    </SonarEmitter>
    <div className={styles.sonar_wave} />
  </PlayIconContainer>
);

PlayIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ImagesContainer = () => {
  const [visible, setVisible] = useState(false);
  const onClick = useCallback(() => {
    setVisible((state) => !state);
  }, []);
  return (
    <div className={styles.hero_image_container}>
      <PlayIcon onClick={onClick} />
      <Image alt="main comic" src={comic} />
      <ModalVideo
        channel="youtube"
        autoplay={visible}
        isOpen={visible}
        videoId="AlU5h2xrQ5M"
        onClose={onClick}
      />
    </div>
  );
};

const ReadMore = () => (
  <div className={styles.hero_read_more}>
    <Button to="/blog/best-software-development-process/">Read More</Button>
  </div>
);

const OverlayBackground = () => (
  <div className={styles.overlay_background}>
    <img src={background} alt="b" />
  </div>
);

const HeroSection = () => (
  <div className={styles.hero_body}>
    <OverlayBackground />
    <Container>
      <Columns isCentered>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <div className={styles.hero_body_left}>
            <H6>Software Development Company</H6>
            <HeroWrapper>
              <Hero >
                Let’s <TextOrange >Build</TextOrange> a <br />
                Great <TextOrange > Idea.</TextOrange>
              </Hero>
            </HeroWrapper>
            <Paragraph>
              We partner with new and early-stage entrepreneurs and industry experts to transforms
              ideas into{' '}
              <br />
              <br />
              Since day one, our technique is focused on early results and transparent
              communication.
            </Paragraph>
            <ReadMore />
          </div>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <ImagesContainer />
        </Column>
      </Columns>
    </Container>
  </div>
);

export default HeroSection;


/* 


              <TextOrange>Web and Mobile Software Products.</TextOrange>


*/