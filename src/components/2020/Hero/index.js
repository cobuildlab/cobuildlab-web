import React from 'react';
import PropTypes from 'prop-types';
import { Container, Column, Columns } from 'bloomer';
import { Icon } from 'react-icons-kit';
import { play } from 'react-icons-kit/fa/play';
import Typography from '../Typography';
import Button from '../Button';
import Image from '../Image';
import VideoPlay from '../VideoPlay';
import background from '../../../resources/2020/home/background.svg';
import comic from '../../../resources/2020/home/cobuildlab-home.svg';
import styles from './css/index.module.scss';

const title1 = {
  default: {
    level: 10,
    fontWeight: 'bold',
  },
  lg: {
    level: 7,
    fontWeight: 'bold',
  },
};

const title2 = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 1,
    fontWeight: 'bold',
  },
};

const title3 = {
  default: {
    level: 11,
    fontWeight: 'normal',
  },
  lg: {
    level: 9,
    fontWeight: 'normal',
  },
};

const TopTitle = ({ children }) => (
  <Typography tag="h2" size={title1} className={styles.hero_text}>
    {children}
  </Typography>
);

TopTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const MainTitle = ({ children }) => (
  <Typography tag="h1" size={title2} className={styles.hero_text}>
    {children}
  </Typography>
);

MainTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const SubTitle = ({ children }) => (
  <Typography tag="p" size={title3} className={styles.hero_text}>
    {children}
  </Typography>
);

SubTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const PlayIcon = () => (
  <VideoPlay>
    <div className={styles.hero_icon_video_container}>
      <div className={styles.sonar_emitter}>
        <Icon size={34} icon={play} className={styles.hero_icon} />
      </div>
      <div className={styles.sonar_wave} />
    </div>
  </VideoPlay>
);


const ImagesContainer = () => (
  <div className={styles.hero_image_container}>
    <PlayIcon />
    <Image alt="main comic" src={comic} />
  </div>
);

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
            <TopTitle>Software Development Company</TopTitle>
            <MainTitle>
              Let’s <span className={styles.hero_orange_text}>Build</span> a <br />
              Great<span className={styles.hero_orange_text}> Idea.</span>
            </MainTitle>
            <SubTitle>
              We partner with new and early-stage entrepreneurs and industry experts to transforms
              ideas into{' '}
              <span className={styles.hero_orange_text}>Web and Mobile Software Products.</span>
              <br />
              <br />
              Since day one, our technique is focused on early results and transparent
              communication.
            </SubTitle>
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
