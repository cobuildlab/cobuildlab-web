import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import ButtonDefault from '../Button/ButtonDefault';
import Typography from '../Typography';
import Image from '../Image';
import styles from './css/index.module.scss';

import img1 from '../../../resources/2020/home/team1.png';
import img2 from '../../../resources/2020/home/team2.png';

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

//TODO add redirect
const OurTeam = () => (
  <Container isFluid className="container-full-width">
    <div className="section-title">
      <Typography tag="h2" size={title} hasTextAlign="centered">
        Our Team
      </Typography>
    </div>
    <div className={styles.our_team_container}>
      <Columns>
        <Column className={styles.columns_not_padding} isSize={{ mobile: 12, desktop: 6 }}>
          <div>
            <Image src={img2} alt="out team" />
          </div>
        </Column>
        <Column className={styles.columns_not_padding} isSize={{ mobile: 12, desktop: 6 }}>
          <div>
            <Image src={img1} alt="out team" />
          </div>
        </Column>
      </Columns>
      <div className={styles.our_team_redirect}>
        <ButtonDefault>read more</ButtonDefault>
      </div>
    </div>
  </Container>
);

export default OurTeam;
