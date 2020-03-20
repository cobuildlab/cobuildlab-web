import React, { memo } from 'react';
import { Container, Columns, Column, Title, Subtitle } from 'bloomer';
import SectionTittle from '../SectionTitle';
import Button from '../Button';
import style from './css/index.module.css';


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