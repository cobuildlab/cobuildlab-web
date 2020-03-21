import React from 'react';
import { Container, Columns, Column } from 'bloomer';
// import Button from '@2020/components/Button';
import Button from '@2020/components/Button';
import Title from '@2020/components/Typography/Title';
import Paragraph from '@2020/components/Typography/Paragraph';
import styles from './css/index.module.scss';

import icon_1 from '@2020/resources/icons/Product-development.svg';
import icon_2 from '@2020/resources/icons/Software-development.svg';
import icon_3 from '@2020/resources/icons/Education-training.svg';

export default () => {

  return(
    <Container>
      <div >
        <Title size="h1" hasTextAlign="centered">
          Service
        </Title>
      </div>
      <div className={styles.service_card_container}>
        <Columns>
          <Column className={styles.service_column} isSize={4}>
            <div className={styles.service_item}>
              <div className={styles.service_icon_container}>
                <img src={icon_1} atl="service-icon" />
              </div>
              <Title size="h3" fontWeight="lighter">
                Product development
              </Title>
              <Paragraph fontSize={16}>
                Problem-solution fit: Observe the Customer, 
                think as the Customer, be the Customer.
              </Paragraph>
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
                <img src={icon_2} atl="service-icon" />
              </div>
              <Title size="h3" fontWeight="lighter">
                Software development
              </Title>
              <Paragraph fontSize={16}>
                It's time to build!. We combine a multidisciplinary 
                team to build the idea. Minimum Viable Product (MVP)
              </Paragraph>
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
                <img src={icon_3} atl="service-icon" />
              </div>
              <Title size="h3" fontWeight="lighter">
                Education < br /> and training
              </Title>
              <Paragraph fontSize={16}>
                Identity, purpose, values, and the correct tools 
                for launching are the main purpose of this step. - 
                Branding - WebSite and Social Networks - Strategy
              </Paragraph>
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