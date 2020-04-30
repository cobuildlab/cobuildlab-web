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
import LinkButtonDefault from '../Button/LinkButtonDefault';
import Image from '../Image';

import logo from '../../../resources/cobuildlab.png';
import { FacebookLink, InstagramLink, YoutubeLink } from '../SocialMediaLinks';
import styles from './css/index.module.scss';

const SocialIcon = ({ isHidden }) => (
  <Fragment>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <FacebookLink color="indigo" />
    </NavbarItem>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <InstagramLink color="indigo" />
    </NavbarItem>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <YoutubeLink color="indigo" />
    </NavbarItem>
  </Fragment>
);

SocialIcon.defaultProps = {
  isHidden: '',
};

SocialIcon.propTypes = {
  isHidden: PropTypes.string,
};

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive((state) => !state);
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
            <SocialIcon isHidden="desktop" />
            <NavbarBurger isActive={isActive} onClick={handleActive} />
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={handleActive}>
            <NavbarEnd>
              <NavbarItem>
                <div className={styles.nav_item}>
                  <Link to="/enterprise" className={styles.nav_link}>
                    <u>Businesses Services</u>
                  </Link>
                </div>
              </NavbarItem>
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
              <NavbarItem>
                <div className={styles.nav_item}>
                  <LinkButtonDefault to="/#contact">Contact Us</LinkButtonDefault>
                </div>
              </NavbarItem>
              <SocialIcon isHidden="mobile" />
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
