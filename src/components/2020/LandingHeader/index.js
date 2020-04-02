import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
} from 'bloomer';
import Image from '../Image';

import logo from '../../../resources/cobuildlab.png';

import styles from '../Header/css/index.module.scss';

const LandingHeader = () => {
  const [isActive, setAtvice] = useState(false);

  const handleActive = useCallback(() => {
    setAtvice((state) => !state);
  }, []);

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
            <NavbarBurger isActive={isActive} onClick={handleActive} />
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={handleActive}>
            <NavbarEnd>
              <NavbarItem>
                <div className={styles.nav_item}>
                  <Link to="/services" className={styles.nav_link}>
                    Services
                  </Link>
                </div>
              </NavbarItem>
              <NavbarItem>
                <div className={styles.nav_item}>
                  <Link to="/customer-success-stories" className={styles.nav_link}>
                    Customer Success Stories
                  </Link>
                </div>
              </NavbarItem>
              <NavbarItem>
                <div className={styles.nav_item}>
                  <Link to="/blog" className={styles.nav_link}>
                    Blog
                  </Link>
                </div>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </div>
  );
};

export default LandingHeader;
