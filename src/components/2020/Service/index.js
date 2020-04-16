import React from 'react';
import PropTypes from 'prop-types';
import { Container, Columns, Column } from 'bloomer';
import ButtonDefault from '../Button/ButtonDefault';
import Typography from '../Typography';
import styles from './css/index.module.scss';

import icon1 from '../../../resources/2020/icons/Product-development.svg';
import icon2 from '../../../resources/2020/icons/Software-development.svg';
import icon3 from '../../../resources/2020/icons/Education-training.svg';

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

const CardFooter = ({ to }) => (
  <div className={styles.service_item_footer}>
    <ButtonDefault>Read more</ButtonDefault>
  </div>
);

CardFooter.defaultProps = {
  to: '',
};

CardFooter.propTypes = {
  to: PropTypes.string,
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
          <CardTitle>Product development</CardTitle>
          <CartCaption>
            Problem-solution fit: Observe the Customer, think as the Customer, be the Customer.
          </CartCaption>
          <CardFooter />
        </Card>
        <Card>
          <CardImage src={icon2} />
          <CardTitle>Software development</CardTitle>
          <CartCaption>
            It&apos;s time to build!. We combine a multidisciplinary team to build the idea. Minimum
            Viable Product (MVP)
          </CartCaption>
          <CardFooter />
        </Card>
        <Card>
          <CardImage src={icon3} />
          <CardTitle>
            Education <br /> and training
          </CardTitle>
          <CartCaption>
            Identity, purpose, values, and the correct tools for launching are the main purpose of
            this step. - Branding - WebSite and Social Networks - Strategy
          </CartCaption>
          <CardFooter />
        </Card>
      </Columns>
    </div>
  </Container>
);

export default Services;
