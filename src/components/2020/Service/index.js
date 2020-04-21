import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column } from 'bloomer';
import Typography from '../Typography';
import styles from './css/index.module.scss';

import icon1 from '../../../resources/2020/icons/Product-development.svg';
import icon2 from '../../../resources/2020/icons/Software-development.svg';
import icon3 from '../../../resources/2020/icons/Education-training.svg';
import LinkButtonDefault from '../Button/LinkButtonDefault';

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
    level: 6,
    fontWeight: 'lighter',
  },
  lg: {
    level: 4,
    fontWeight: 'lighter',
  },
};

const paragraph = {
  default: {
    level: 10,
    fontWeight: 'normal',
  },
};

const Card = ({ children }) => (
  <Column className={styles.service_column} isSize={4}>
    <div className={styles.service_item}>{children}</div>
  </Column>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const CardImage = ({ src }) => (
  <div className={styles.service_icon_container}>
    <img src={src} alt="service-icon" className={styles.service_img} />
  </div>
);

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
};

const CardTitle = ({ children }) => (
  <Typography tag="h4" size={subTitle} hasTextAlign="left">
    {children}
  </Typography>
);

CardTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const CartCaption = ({ children }) => (
  <Typography tag="p" size={paragraph}>
    {children}
  </Typography>
);

CartCaption.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const CardFooter = ({ to, text }) => (
  <div className={styles.service_item_footer}>
    <LinkButtonDefault to={to}>{text}</LinkButtonDefault>
  </div>
);

CardFooter.defaultProps = {
  to: '/',
  text: 'Read More',
};

CardFooter.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

const Services = () => (
  <Container>
    <div className="section-title">
      <Typography tag="h2" size={title} hasTextAlign="centered">
        Services
      </Typography>
    </div>
    <div className={styles.service_card_container}>
      <Columns>
        <Card>
          <CardImage src={icon1} />
          <CardTitle>Product development for Startups</CardTitle>
          <CartCaption>
            We partner with entrepreneurs to transform ideas to Software Products.
          </CartCaption>
          <CardFooter to={'/blog/software-development-for-new-products/'} />
        </Card>
        <Card>
          <CardImage src={icon2} />
          <CardTitle>Custom Software Development</CardTitle>
          <CartCaption>
            We automate and streamline processes with Custom Software to grow your Company with your
            unique sauce.
          </CartCaption>
          <CardFooter to={'/blog/best-software-development-process/'} />
        </Card>
        <Card>
          <CardImage src={icon3} />
          <CardTitle>
            Staff <br /> Augmentation
          </CardTitle>
          <CartCaption>
            We put at your service Senior developers with Javascript and Python technologies to
            boost your projects.
          </CartCaption>
          <CardFooter text={'Contact US'} to={'/#contact'} />
        </Card>
      </Columns>
    </div>
  </Container>
);

export default Services;
