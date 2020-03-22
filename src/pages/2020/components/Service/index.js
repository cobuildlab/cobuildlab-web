import React from 'react';
import { Container, Columns, Column } from 'bloomer';
// import Button from '@2020/components/Button';
import Button from '@2020/components/Button';
import Typography from '@2020/components/Typography';
import styles from './css/index.module.scss';

import icon_1 from '@2020/resources/icons/Product-development.svg';
import icon_2 from '@2020/resources/icons/Software-development.svg';
import icon_3 from '@2020/resources/icons/Education-training.svg';


const title = {
  default:{
    level: 4,
    fontWeight: 'bold'
  },
  lg:{
    level: 2,
    fontWeight: 'bold'
  }
}

const subTitle = {
  default:{
    level: 6,
    fontWeight: 'lighter'
  },
  lg:{
    level: 4,
    fontWeight: 'lighter'
  },
}

const paragraph = {
  default:{
    level: 10,
    fontWeight: 'normal'
  },
}

export default () => {

  return(
    <Container>
      <div >
        <Typography size={title} hasTextAlign="centered">
          Service
        </Typography>
      </div>
      <div className={styles.service_card_container}>
        <Columns>
          <Column className={styles.service_column} isSize={4}>
            <div className={styles.service_item}>
              <div className={styles.service_icon_container}>
                <img src={icon_1} atl="service-icon" className={styles.service_img}/>
              </div>
              <Typography size={subTitle}>
                Product development
              </Typography>
              <Typography size={paragraph}>
                Problem-solution fit: Observe the Customer, 
                think as the Customer, be the Customer.
              </Typography>
              <div className={styles.service_item_footer}>
                <Button>
                  Read more
                </Button>
              </div>
            </div>
          </Column>
          <Column className={styles.service_column} isSize={4}>
            <div className={styles.service_item}>
              <div className={styles.service_icon_container}>
                <img src={icon_2} atl="service-icon" className={styles.service_img} />
              </div>
              <Typography size={subTitle}>
                Software development
              </Typography>
              <Typography size={paragraph}>
                It's time to build!. We combine a multidisciplinary 
                team to build the idea. Minimum Viable Product (MVP)
              </Typography>
              <div className={styles.service_item_footer}>
                <Button>
                  Read more
                </Button>
              </div>
            </div>
          </Column>
          <Column className={styles.service_column} isSize={4}>
            <div className={styles.service_item}>
              <div className={styles.service_icon_container}>
                <img src={icon_3} atl="service-icon" className={styles.service_img}/>
              </div>
              <Typography size={subTitle}>
                Education < br /> and training
              </Typography>
              <Typography size={paragraph}>
                Identity, purpose, values, and the correct tools 
                for launching are the main purpose of this step. - 
                Branding - WebSite and Social Networks - Strategy
              </Typography>
              <div className={styles.service_item_footer}>
                <Button>
                  Read more
                </Button>
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </Container>
  )
}