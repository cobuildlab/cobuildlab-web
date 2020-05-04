import React, { useCallback, useState, useEffect } from 'react';
import Drawer from '../enterprise/containers/Drawer';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { list } from 'react-icons-kit/fa/list';
import PortfolioMenuItems from './PortfolioMenuItems';

const MenuContainer = styled.div`
  padding-top: 1em;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
  top: 0;
  @media screen and (max-width: 768px) {
    padding-top: 0em;
    width: 100%;
    z-index: 100;
  }
`;

const MenuTitle = styled.li`
  color: #264a60;
  font-size: 20px;
  padding: 0.5em 0.8em;
  font-weight: normal;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    background-color: ${({ isFixed }) => (isFixed ? '#E76C29' : 'transparent')};
    color: ${({ isFixed }) => (isFixed ? '#fff' : '#E76C29')};
    justify-content: center;
  }
`;

const Menu = styled.ul`
  transition: all 0.3s ease-in;
  top: 0;
`;

const OnlyMobile = styled.div`
  display: none;
  @media screen and (max-width: 991.98px) {
    display: block;
  }
`;

const DrawerMenuContainer = styled.ul`
  height: 100vh;
  overflow: scroll;
  padding-bottom: 3em;
`;

const OnlyDesktop = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;

const IconList = styled(Icon)`
  color: inherit;
  margin-right: 0.5em;
`;

const PortfolioMenu = () => {
  const [isVisible, setVisible] = useState(false);
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 64 && !isFixed) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleOpen = useCallback(() => {
    setVisible((state) => !state);
  }, []);

  return (
    <MenuContainer isFixed={isFixed}>
      <OnlyDesktop>
        <Menu>
          <MenuTitle>
            <IconList size={20} icon={list} />
            Projects
          </MenuTitle>
          <PortfolioMenuItems />
        </Menu>
      </OnlyDesktop>
      <OnlyMobile>
        <Menu>
          <MenuTitle onClick={handleOpen} isFixed={isFixed}>
            <IconList size={20} icon={list} />
            Projects
          </MenuTitle>
        </Menu>
      </OnlyMobile>
      <Drawer visible={isVisible} onClose={handleOpen}>
        <DrawerMenuContainer>
          <PortfolioMenuItems onClick={handleOpen} />
        </DrawerMenuContainer>
      </Drawer>
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
