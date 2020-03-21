import React, { memo } from 'react';
import { Container, Columns, Column, Subtitle } from 'bloomer';
// import Button from '@2020/components/Button';
import Button from '@2020/components/Button';
import Title from '@2020/components/Typography/Title';
import styles from './css/index.module.scss';

import icon_1 from '@2020/resources/home/Education-training.svg';

const Item = ({ icon }) => (
  <div className={styles.service_item}>
    <div>
      <img src={icon_1} atl="service-icon" />
    </div>
    <Title size="h2">
      Product development
    </Title>
    <p>
      Problem-solution fit: Observe the Customer, think as the Customer, be the Customer.
    </p>
    <Button>
      Read more
    </Button>
  </div>
)



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
          <Column isSize={4}>
            <Item />
          </Column>
          <Column isSize={4}>
            <Item />
          </Column>
          <Column isSize={4}>
            <Item />
          </Column>
        </Columns>
      </div>
    </Container>
  )
}