import React from 'react';
import { Container, Column, Columns } from 'bloomer';
import Typography from '../Typography';
import ContactForm from '../ContactForm';
import Image from '../Image';
import styles from './css/index.module.scss';
import img from '../../../resources/2020/home/coubuild-v.svg';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 9,
    fontWeight: 'lighter',
  },
};

const Title = () => (
  <div className={styles.contact_title}>
    <Typography tag="h6" size={title} hasTextAlign="left">
      Write Us!
    </Typography>
    <Typography tag="span" size={subTitle} hasTextAlign="left">
      Your business takes off right now
    </Typography>
  </div>
);


const Contact = () => (
  <Container>
    <Columns isCentered>
      <Column className={styles.contact_column} isSize={{ mobile: 12, desktop: 6 }}>
        <Title />
        <ContactForm />
      </Column>
      <Column className={styles.contact_column} isSize={{ mobile: 12, desktop: 6 }}>
        <Image src={img} alt="contact form" />
      </Column>
    </Columns>
  </Container>
);


export default Contact;
