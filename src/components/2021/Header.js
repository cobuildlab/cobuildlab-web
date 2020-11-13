import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
} from 'bloomer';
import SmoothScrollingButton from './buttons/ButtonSmoothScrolling';
import SocialIcons from './SocialIcons';
import { NavDivider, NavBrand, NavBrandImages, NavItem } from './HeaderLayout';
import logo from '../../assets/2021/cobuildlab.png';
import { Icon } from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';

const Header = ({ isFluid }) => {
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
            <SocialIcons isHidden="desktop" />
            <NavbarBurger isActive={isActive} onClick={handleActive} />
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={handleActive}>
            <NavbarEnd>
              <NavbarItem>
                <NavItem>
                  <Icon icon={phone} alt="phone" size={22} />
                  <a href="tel:+17869913467">+ 1 (786) 991 3467</a>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <SmoothScrollingButton href="#contact">Contact Us</SmoothScrollingButton>
              </NavbarItem>
              <SocialIcons isHidden="mobile" />
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </NavDivider>
  );
};

Header.defaultProps = {
  isFluid: false,
};

Header.propTypes = {
  isFluid: PropTypes.bool,
};

export default Header;
