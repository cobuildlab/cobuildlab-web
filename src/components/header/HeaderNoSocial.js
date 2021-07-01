import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarEnd } from 'bloomer';
import { SmoothScrollingButton } from '../2021/button/SmoothScrollingButton';
import { NavDivider, NavBrand, NavBrandImages, NavItem } from './HeaderLayout';
import logo from '../../resources/cobuildlab.png';
import { Icon } from 'react-icons-kit';
import { phone } from 'react-icons-kit/fa/phone';

const HeaderNoSocial = ({ isFluid }) => {
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
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </NavDivider>
  );
};

HeaderNoSocial.defaultProps = {
  isFluid: false,
};

HeaderNoSocial.propTypes = {
  isFluid: PropTypes.bool,
};

export { HeaderNoSocial };
