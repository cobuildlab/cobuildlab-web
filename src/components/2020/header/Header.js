import React, { useState, useCallback } from 'react';
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
import SocialIcons from './SocialIcons';
import { NavDivider, NavBrand, NavBrandImages, NavItem, NavLink } from './HeaderLayout';
import logo from '../../../resources/cobuildlab.png';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleActive = useCallback(() => {
    setActive((state) => !state);
  }, []);

  return (
    <NavDivider>
      <Container>
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
                  <NavLink to="/enterprise">
                    <u>Businesses Services</u>
                  </NavLink>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <NavItem>
                  <NavLink to="/services">Services</NavLink>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <NavItem>
                  <NavLink to="/customer-success-stories">Customer Success Stories</NavLink>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <NavItem>
                  <NavLink to="/blog">Blog</NavLink>
                </NavItem>
              </NavbarItem>
              <NavbarItem>
                <NavLink>
                  <LinkButtonDefault to="/#contact">Contact Us</LinkButtonDefault>
                </NavLink>
              </NavbarItem>
              <SocialIcons isHidden="mobile" />
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </NavDivider>
  );
};

export default Header;
