import React, { memo } from 'react';
import { Container, Columns, Column, Title, Subtitle } from 'bloomer';
import SectionTittle from '@2020/components/SectionTitle';
// import Button from '@2020/components/Button';
import { Button } from '@2020/components';
import style from './css/index.module.scss';

console.log("button", Button);

const Item = () => (
  <div>

  </div>
)



export default () => {

  return(
    <Container>
      <div>
        <SectionTittle>
          Services Title
        </SectionTittle>
        <Subtitle isSize={6} tag="span">
          Problem solution fit: Oserver the customer, think as the customer, be the customer
        </Subtitle>
      </div>
    </Container>
  )
}