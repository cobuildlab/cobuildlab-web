import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
} from 'bloomer';
import Image from './Image';

import logo from '../../resources/cobuildlab.png';

import styles from './Header/css/index.module.scss';

const LandingHeader = () => {
  return (
    <div className={styles.nav_divider}>
      <Container>
        <Navbar>
          <NavbarBrand>
            <NavbarItem>
              <Link className={styles.nav_brand} to="/">
                <Image className={styles.nav_brand_img} src={logo} alt="logo" />
              </Link>
            </NavbarItem>
          </NavbarBrand>
        </Navbar>
      </Container>
    </div>
  );
};

export default LandingHeader;
