import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import Typography from '@2020/components/Typography';
import Button from '@2020/components/Button';
import comic from '@2020/resources/home/cobuildlab-home.svg';
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

const HeroSection = () => (
  <Container>
    <div className={styles.hero_body}>
      <Columns isCentered>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <div className={styles.hero_body_left}>
            <Typography tag="h2" size={title1} className={styles.hero_text}>
              Software Development Company
            </Typography>
            <Typography tag="h1" size={title2} className={styles.hero_text}>
              Let’s <span className={styles.hero_orange_text}>Build</span> a <br />
              Great<span className={styles.hero_orange_text}> Idea.</span>
            </Typography>
            <Typography tag="p" size={title3} className={styles.hero_text}>
              We partner with new and early-stage entrepreneurs and industry experts to transforms
              ideas into{' '}
              <span className={styles.hero_orange_text}>Web and Mobile Software Products.</span>
              <br />
              <br />
              Since day one, our technique is focused on early results and transparent
              communication.
            </Typography>
            <div className={styles.hero_read_more}>
              <Button>Read More</Button>
            </div>
          </div>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6 }}>
          <img alt="main comic" src={comic} style={{ width: '100%', height: 'auto' }} />
        </Column>
      </Columns>
    </div>
  </Container>
);

export default HeroSection;
