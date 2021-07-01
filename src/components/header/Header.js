import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd } from 'bloomer';
import { SmoothScrollingButton } from '../2021/button/SmoothScrollingButton';
import SocialIcons from './SocialIcons';
import { NavDivider, NavBrand, NavBrandImages, NavItem } from './HeaderLayout';
import logo from '../../resources/cobuildlab.png';
import { Icon } from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';

const Header = ({ isFluid, showSocialIcons }) => {
  const [isActive, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive((state) => !state);
  }, []);

  return (
    <NavDivider>
      <Container isFluid={isFluid}>
        <Navbar>
          <NavbarBrand>
            <NavbarItem>
              <NavBrand to="/">
                <NavBrandImages src={logo} alt="logo" />
              </NavBrand>
            </NavbarItem>
            <NavbarItem isHidden="desktop">
              <NavItem>
                <Icon icon={phone} alt="facebook-icon" size={22} />
                <a href="tel:+1 7869913467">+1 (786) 991 3467</a>
              </NavItem>
            </NavbarItem>
            {/*<NavbarBurger isActive={isActive} onClick={handleActive} />*/}
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={handleActive}>
            <NavbarEnd>
              <NavbarItem isHidden="mobile">
                <NavItem>
                  <Icon icon={phone} alt="facebook-icon" size={22} />
                  <a href="tel:+1 7869913467">+1 (786) 991 3467</a>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <SmoothScrollingButton href="#contact">Contact Us</SmoothScrollingButton>
              </NavbarItem>
              {showSocialIcons && <SocialIcons isHidden="mobile" />}
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </NavDivider>
  );
};

Header.defaultProps = {
  isFluid: false,
  showSocialIcons: true,
};

Header.propTypes = {
  isFluid: PropTypes.bool,
  showSocialIcons: PropTypes.bool,
};

export default Header;
