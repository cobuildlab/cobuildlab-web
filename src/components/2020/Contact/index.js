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

const description = {
  title: {
    default: {
      level: 11,
      fontWeight: 'bold',
    },
  },
  subTitle: {
    default: {
      level: 13,
      fontWeight: 'lighter',
    },
  },
};

const Title = () => (
  <div className={styles.contact_title}>
    <Typography tag="h6" size={title} hasTextAlign="left">
      Write Us!
    </Typography>
    <Typography tag="p" size={subTitle} hasTextAlign="left">
      Your business takes off right now
    </Typography>
    <Typography tag="p" size={description.title}>
      Where are we?
      <br />
      <Typography tag="span" size={description.subTitle}>
        66 West Flagler St, Suite 900, Miami, Florida 33130 +1 (786) 991-3467 contact@cobuildlab.com
      </Typography>
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
