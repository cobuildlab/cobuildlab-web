import React from 'react';
import { NavbarBrand, NavbarItem, NavItem, NavRight, Container, NavCenter, Navbar } from 'bloomer';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { phone } from 'react-icons-kit/fa/phone';
import { envelope } from 'react-icons-kit/fa/envelope';
import { HeroHeader } from './HeaderLayout';
import links from './links.json';
import Icon from 'react-icons-kit';

const Header = () => (
  <HeroHeader>
    <Container>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link to="/">
              <StaticImage
                imgStyle={{
                  width: '100%',
                }}
                src={'../../../assets/2022/cobuildlab-logo.png'}
                alt="Cobuildlab Logo"
              />
            </Link>
          </NavbarItem>
        </NavbarBrand>
        <NavCenter>
          <NavbarItem>
            {links.map(({ name, link }) => (
              <Link key={name} to={link}>
                <NavItem>{name}</NavItem>
              </Link>
            ))}
          </NavbarItem>
        </NavCenter>
        <NavRight>
          <NavItem>
            <Link to="mailto:contact@cobuildlab.com">
              <Icon icon={envelope} alt="facebook-icon" size={22} />
              contact@cobuildlab.com
            </Link>
          </NavItem>
          <NavItem>
            <Link to="tel:+1 7869913467">
              <Icon icon={phone} alt="facebook-icon" size={22} /> +1 (786) 991 3467
            </Link>
          </NavItem>
        </NavRight>
      </Navbar>
    </Container>
  </HeroHeader>
);

export default Header;
