import React, { useCallback, useState, useEffect } from 'react';
import Drawer from '../enterprise/containers/Drawer';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MenuContainer = styled.div`
  position: relative;
  z-index: 70;
  padding-top: 1em;
  
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
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuWrapper = styled.ul`
  max-width: 200px;
  position: ${ ({ isFixed }) => isFixed ? 'fixed' : 'relative'};
  top: 0;
  border-right: ${ ({ isFixed }) => isFixed ? '1px solid #f0f0f0' : 'none'} ;
`;

const MenuItem = styled.li`
  width: 100%;
  color: #264a60;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
`;

const MenuLink = styled(AnchorLink)`
  padding: 0.5em 1em;
  display: block;
  text-transform: uppercase;
  font-size: 16px;
  color: inherit;
  transition: all 0.2s linear;
  &:hover {
    color: #e76c29;
  }
`;

const PortfolioMenu = () => {
  const [isVisible, setVisible] = useState(false);
  const [isFixed, setFixed] = useState(false);


  useEffect(() => {

    const onScroll = () => {
      if(window.scrollY > 64 && !isFixed){
        setFixed(true);
      }else{
        setFixed(false);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };

  }, []);

  const handleOpen = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <MenuContainer>
      <MenuWrapper isFixed={isFixed}>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#accountable">Accountable</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#bazl">Bazl</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#chater">Chater</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#collabtogrow">Collabtogrow</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#contentManager">Content Manager</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#ctoFounders">CTO Founders</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#elpitazo">El Pitazo</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#elemental">Elemental</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#gurupia">Gurupia</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#jobcore">Jobcore</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#kadem">Kadem</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#leadvolt">Lead Volt</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#mama">Mama</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#massone">Massone</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#miamisoftwaredevelopers">Miami Software Developers</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#okroo">Okroo</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#payklever">Payklever</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#ryval">Ryval</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#storyRocket">Story Rocket</MenuLink>
        </MenuItem>
        <MenuItem onClick={handleOpen}>
          <MenuLink href="#zonia">Zonia</MenuLink>
        </MenuItem>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default PortfolioMenu;


// <Drawer visible={isVisible} onClose={handleOpen}>


/* 
  <ToggleContainer type="button" onClick={handleOpen}>
        <BurgerIcon />
        <MenuTitle>Other Projects</MenuTitle>
      </ToggleContainer>
*/