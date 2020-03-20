import React from 'react';
import { Title } from 'bloomer';
import style from './css/index.module.css';


export default ({ children }) => (
  <Title 
    tag="h4" 
    isSize={1} 
    hasTextAlign="centered"
    className={style.section_title}
    >
    {children}
  </Title>
)