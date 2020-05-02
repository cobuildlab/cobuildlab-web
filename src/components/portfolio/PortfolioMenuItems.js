import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MenuItem = styled.li`
  color: #264a60;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  list-style: none;
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

const PortfolioMenuItem = ({ onClick }) => (
  <Fragment>
    <MenuItem onClick={onClick}>
      <MenuLink href="#accountable">Accountable</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#bazl">Bazl</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#chater">Chater</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#collabtogrow">Collabtogrow</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#contentManager">Content Manager</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#ctoFounders">CTO Founders</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#elpitazo">El Pitazo</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#elemental">Elemental</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#gurupia">Gurupia</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#jobcore">Jobcore</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#kadem">Kadem</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#leadvolt">Lead Volt</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#mama">Mama</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#massone">Massone</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#miamisoftwaredevelopers">Miami Software Developers</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#okroo">Okroo</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#payklever">Payklever</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#ryval">Ryval</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#storyRocket">Story Rocket</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#zonia">Zonia</MenuLink>
    </MenuItem>
  </Fragment>
);

PortfolioMenuItem.defaultProps = {
  onClick: () => null,
};

PortfolioMenuItem.propTypes = {
  onClick: PropTypes.func,
};

export default PortfolioMenuItem;
