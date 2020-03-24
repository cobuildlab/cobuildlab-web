import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import Typography from '../Typography';
import Button from '../Button';
import styles from './css/index.module.scss';
import componse from '../../../utils/styles-componse';
import img1 from '../../../resources/2020/home/coubuild-b.svg';
import img2 from '../../../resources/2020/home/coubuild-t.svg';
//TODO import correct icons
import icon_1 from '../../../resources/2020/icons/Product-development.svg';

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
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 5,
    fontWeight: 'bold',
  },
};

const paragraph = {
  default: {
    level: 11,
    fontWeight: 'normal',
  },
  lg: {
    level: 10,
    fontWeight: 'normal',
  },
};

const BusinessValue = () => (
  <Container>
    <div>
      <div className="section-title">
        <Typography tag="h2" size={title} hasTextAlign="centered">
          Value
        </Typography>
      </div>
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 4 }}>
          <div>
            <img src={img1} alt="business value" style={{ width: '100%', height: '100%' }} />
          </div>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 8 }}>
          <div className={styles.business_value_content}>
            <div
              className={componse(
                styles.business_value_overlay,
                styles.business_value_overlay_right,
              )}
            />
            <div className={styles.business_value_content_container}>
              <Typography tag="h4" size={subTitle}>
                Business <span className="text-color-orange">Value</span>
              </Typography>
              <div className={styles.business_value_paragraph}>
                <Typography tag="p" size={paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque,
                  sapien at molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl
                  nec libero. Suspendisse imperdiet in ex ac varius. Donec elementum libero eu
                  purus euismod, sit amet congue leo bibendum. Donec lacus ipsum, sodales a
                  dignissim quis, placerat eget ex.
                </Typography>
              </div>
              <ul className={styles.business_value_icon_list}>
                <li className={styles.business_value_icon_item_right}>
                  <img src={icon_1} alt="business value" />
                </li>
                <li className={styles.business_value_icon_item_right}>
                  <img src={icon_1} alt="business value" />
                </li>
                <li className={styles.business_value_icon_item_right}>
                  <img src={icon_1} alt="business value" />
                </li>
              </ul>
              <div
                className={componse(
                  styles.business_value_content_footer,
                  styles.business_value_content_left,
                )}>
                <Button>read more</Button>
              </div>
            </div>
          </div>
        </Column>
      </Columns>
      <br />
      <br />
      <br />
      <br />
      <Columns>
        <Column isSize={{ mobile: 12, desktop: 8 }}>
          <div className={styles.business_value_content}>
            <div
              className={componse(
                styles.business_value_overlay,
                styles.business_value_overlay_left,
              )}
            />
            <div className={styles.business_value_content_container}>
              <Typography tag="h4" size={subTitle} hasTextAlign="right">
                Business <span className="text-color-orange">Value</span>
              </Typography>
              <div className={styles.business_value_paragraph}>
                <Typography tag="p" size={paragraph} hasTextAlign="right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque,
                  sapien at molestie suscipit, sapien leo faucibus ante, quis iaculis mauris nisl
                  nec libero. Suspendisse imperdiet in ex ac varius. Donec elementum libero eu
                  purus euismod, sit amet congue leo bibendum. Donec lacus ipsum, sodales a
                  dignissim quis, placerat eget ex.
                </Typography>
              </div>
              <ul
                className={componse(
                  styles.business_value_icon_list,
                  styles.business_value_content_right,
                )}>
                <li className={styles.business_value_icon_item_left}>
                  <img src={icon_1} alt="business value" />
                </li>
                <li className={styles.business_value_icon_item_left}>
                  <img src={icon_1} alt="business value" />
                </li>
                <li className={styles.business_value_icon_item_left}>
                  <img src={icon_1} alt="business value" />
                </li>
              </ul>
              <div
                className={componse(
                  styles.business_value_content_footer,
                  styles.business_value_content_right,
                )}>
                <Button>read more</Button>
              </div>
            </div>
          </div>
        </Column>
        <Column isSize={{ mobile: 12, desktop: 4 }}>
          <div className={styles.business_value_img_container}>
            <img src={img2} alt="business value" style={{ width: '100%', height: '100%' }} />
          </div>
        </Column>
      </Columns>
    </div>
  </Container>
);

export default BusinessValue;
