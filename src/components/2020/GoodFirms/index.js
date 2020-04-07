import React from 'react';
import styles from './css/index.module.scss';

const GoodFirms = () => (
  <div className={styles.good_firms_container}>
    <a
      target="_blank"
      href="https://www.goodfirms.co/company/cobuild-lab-inc"
      rel="noreferrer noopener">
      <img
        className={styles.image}
        src="https://goodfirms.s3.amazonaws.com/badges/blue-button/app-development.svg"
        alt="GoodFirms Badge"
      />
    </a>
  </div>
);

export default GoodFirms;
