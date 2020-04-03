import React, { useCallback, useState } from 'react';
import Drawer from './Drawer';
import styled from 'styled-components';

const MenuContainer = styled.div`
  margin-left: auto;
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
  &:hover{
    & ${BurgerIcon}:before {
      width: 24px;
    }
    & ${BurgerIcon}:after {
      width: 36px;
    }
  }
`;

const BurgerIcon = styled.span`
  width: 36px;
  height: 2px;
  position: relative;
  margin-right: 15px;
  transition: all 0.5s ease-in-out;
  background-color: #E76C29;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 0;
    width: 36px;
    height: 2px;
    transition: all 0.5s ease-in-out;
    background-color: #E76C29;
  }
  &:after {
    top: auto;
    bottom: -8px;
    width: 24px;
  }
`;

const MenuTitle = styled.span`
  color: #264A60;
  line-height: 40px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const MenuWrapper = styled.ul`
  border-top: 1px solid #e2e2e2;
`;

const MenuItem = styled.li`
  width: 100%;
  color: #264A60;
  line-height: 40px;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  border-bottom: 1px solid #e2e2e2;
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
          <MenuItem>hola</MenuItem>
        </MenuWrapper>
      </Drawer>
    </MenuContainer>
  );
};

export default Menu;
