import React, { memo } from 'react';
import { Container, Columns, Column, Subtitle } from 'bloomer';
// import Button from '@2020/components/Button';
import { Button, Typography } from '@2020/components';
import styles from './css/index.module.scss';

const { Title } = Typography;

const Item = ({ icon }) => (
  <div className={styles.service_item}>
    <div>
      <img src={icon} atl="service-icon" />
    </div>
    <Title size="h2" fontWeight="lighter">
      Product development
    </Title>
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