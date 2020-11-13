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
import SmoothScrollingButton from '../Button/ButtonSmoothScrolling';
import SocialIcons from './SocialIcons';
import { NavDivider, NavBrand, NavBrandImages, NavItem, NavLink } from './HeaderLayout';
import logo from '../../../resources/cobuildlab.png';
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
                  <Icon icon={phone} alt="facebook-icon" size={22} />
                  <a href="tel:+1 7869913467">+1 786 (991) 3467</a>
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
