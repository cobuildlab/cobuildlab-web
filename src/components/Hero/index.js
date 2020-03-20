import React, { useState, useCallback } from 'react';
import {
  Container,
  Column,
  Columns,
  Title
} from 'bloomer'
import ModalVideo from 'react-modal-video'

import ReadMore from './ReadMore';
import Button from '../Button';

import componse from '../../utils/StyleComponse';
import comic from '../../resources/home/cobuildlab-home.svg'
import styles from './css/index.module.css';


export default () => {

  const [isVisible, setVisible] = useState(false);

  const handleModal = useCallback(() => {
    setVisible(state => !state);
  }, [])

  return(
    <Container>
      <div className={styles.hero_body}>
        <Columns isCentered>
          <Column isSize={{ mobile: 12, desktop: 6}}>
            <div className={styles.hero_body_left}>
              <Title 
                tag="h3" 
                className={componse(styles.hero_title, styles.hero_title_h3)}
              >
                Software Development Company</Title>
              <Title 
                tag="h1" 
                className={componse(styles.hero_title, styles.hero_title_h1)}
              >
                Let’s <span className={styles.hero_orange_text}>Build</span> a <br/>
                Great<span className={styles.hero_orange_text}>{' '}Idea.</span>
              </Title>
              <Title 
                tag="h4" 
                className={componse(styles.hero_title, styles.hero_title_h4, styles.hero_sub_title)}
              >
                We partner with new and early-stage non-technical
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
  )
}