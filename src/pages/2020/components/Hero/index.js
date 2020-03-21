import React from 'react';
import { Container, Column, Columns} from 'bloomer'
import Title from '@2020/components/Typography/Title';
import Button from '@2020/components/Button';
import comic from '@2020/resources/home/cobuildlab-home.svg'
import styles from './css/index.module.scss';


export default () => (
  <Container>
    <div className={styles.hero_body}>
      <Columns isCentered>
        <Column isSize={{ mobile: 12, desktop: 6}}>
          <div className={styles.hero_body_left}>
            <Title size="h6" className={styles.hero_text}>
              Software Development Company
            </Title>
            <Title size="hero" className={styles.hero_text}>
              Let’s <span className={styles.hero_orange_text}>Build</span> a <br/>
              Great<span className={styles.hero_orange_text}>{' '}Idea.</span>
            </Title>
            <Title size="subTitle" className={styles.hero_text}>
              We partner with new and early-stage
              entrepreneurs and industry experts to transforms ideas into{' '}
              <span className={styles.hero_orange_text}>
                Web and Mobile Software Products.
              </span>
              <br />
              <br />
              Since day one, our technique is focused on early results and
              transparent communication.
            </Title>
            <div className={styles.hero_read_more}>
              <Button>
                Read More
              </Button>
            </div>
          </div>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 6}}>
            <img alt="main comic" src={comic} style={{ width: '100%', height: 'auto' }} />
        </Column>
      </Columns>
    </div>
  </Container>
);
