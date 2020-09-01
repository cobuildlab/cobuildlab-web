import React, { useCallback, useState } from 'react';
import Drawer from './Drawer';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MenuContainer = styled.div`
  margin-left: auto;
`;

const BurgerIcon = styled.span`
  width: 36px;
  height: 2px;
  position: relative;
  margin-right: 15px;
  transition: all 0.5s ease-in-out;
  background-color: #e76c29;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 0;
    width: 36px;
    height: 2px;
    transition: all 0.5s ease-in-out;
    background-color: #e76c29;
  }
  &:after {
    top: auto;
    bottom: -8px;
    width: 24px;
  }
`;

const ToggleContainer = styled.span`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  &:hover {
    & ${BurgerIcon}:before {
      width: 24px;
    }
    & ${BurgerIcon}:after {
      width: 36px;
    }
  }
`;

const MenuTitle = styled.span`
  color: #264a60;
  line-height: 40px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuWrapper = styled.ul`
  border-top: 1px solid #e2e2e2;
`;

const MenuItem = styled.li`
  width: 100%;
  color: #264a60;
  line-height: 40px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  border-bottom: 1px solid #e2e2e2;
`;

const AnchorMenuLink = styled(AnchorLink)`
  padding: 0.5em 1em;
  display: block;
  font-size: 16px;
  color: inherit;
  transition: all 0.2s linear;
  &:hover {
    color: #e76c29;
  }
`;

const MenuLink = styled.a`
  padding: 0.5em 1em;
  display: block;
  font-size: 16px;
  color: inherit;
  transition: all 0.2s linear;
  &:hover {
    color: #e76c29;
  }
`;

const Menu = () => {
  const [isVisible, setVisible] = useState(false);

  const handleOpen = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <MenuContainer>
      <ToggleContainer type="button" onClick={handleOpen}>
        <BurgerIcon />
        <MenuTitle>Menu</MenuTitle>
      </ToggleContainer>
      <Drawer visible={isVisible} onClose={handleOpen}>
        <MenuWrapper>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#banner">Home</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <MenuLink href="/blog">Blog</MenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#services-anchor">Our Services</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#our-mission-anchor">Our Main Mission</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#skills">Our Skills</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#our-team-anchor">Our Team</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#project">Our Experience</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#testimonials">Client Testimonials</AnchorMenuLink>
          </MenuItem>
          <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#contact-us-anchor">Contact Us</AnchorMenuLink>
          </MenuItem>
          {/* <MenuItem onClick={handleOpen}> */}
          {/* <AnchorMenuLink href="#enterprise-css">Case Studies</AnchorMenuLink>
          </MenuItem> */}
          {/* <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#video">Video</AnchorMenuLink>
          </MenuItem> */}
          {/* <MenuItem onClick={handleOpen}>
            <AnchorMenuLink href="#about">About</AnchorMenuLink>
          </MenuItem> */}
        </MenuWrapper>
      </Drawer>
    </MenuContainer>
  );
};

export default Menu;
