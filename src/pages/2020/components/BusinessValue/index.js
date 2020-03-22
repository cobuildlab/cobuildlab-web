import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import Typography from '@2020/components/Typography';
import styles from './css/index.module.scss';
import img1 from '../../resources/home/coubuild-b.svg';

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


export default () => {

  return(
    <Container>
      <div >
        <div className="section-title">
          <Typography size={title} hasTextAlign="centered">
            Value
          </Typography>
        </div>
        <Columns>
          <Column isSize={4}>
            <div>
              <img src={img1} alt="business value" style={{ width: '100%', height: '100%' }}/>
            </div>
          </Column>
          <Column isSize={8}>
              <div className={styles.business_value_content}>
                <div className={styles.business_value_overlay} />
              </div>
          </Column>
        </Columns>
      </div>
    </Container>
  )
}