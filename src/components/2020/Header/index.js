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
import Button from '../Button';
import Image from '../Image';

import logo from '../../../resources/cobuildlab.png';
import facebook from '../../../resources/icons/facebook.svg';
import instagram from '../../../resources/icons/instagram.svg';
import youtube from '../../../resources/icons/youtube.svg';

import styles from './css/index.module.scss';

//TODO add links
const SocialIcon = ({ isHidden }) => (
  <Fragment>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <a href="https://www.facebook.com/cobuildlab/" rel="noreferrer noopener" target="_blank">
        <Image src={facebook} alt="facebook-icon" />
      </a>
    </NavbarItem>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <a href="https://www.instagram.com/cobuildlab/" rel="noreferrer noopener" target="_blank">
        <Image src={instagram} alt="instagram-icon" />
      </a>
    </NavbarItem>
    <NavbarItem isHidden={isHidden} className={styles.nav_icon}>
      <a
        href="https://www.youtube.com/channel/UCdI6t05TWyASVdT_H0Sqt3A"
        rel="noreferrer noopener"
        target="_blank">
        <Image src={youtube} alt="youtube-icon" />
      </a>
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
  const [isActive, setAtvice] = useState(false);

  const handleActive = useCallback(() => {
    setAtvice((state) => !state);
  }, []);

  return (
    <div className={styles.nav_divider}>
      <Container>
        <Navbar className={styles.navbar}>
          <NavbarBrand className={styles.nav_bran_container}>
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
                  <Button to="/#contact" className={styles.nav_link_spacing}>
                    Contact Us
                  </Button>
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
