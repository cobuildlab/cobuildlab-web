import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MenuItem = styled.li`
  color: #264a60;
  list-style: none;
`;

const MenuLink = styled(AnchorLink)`
  padding: 0.5em 1em;
  display: block;
  font-size: 15px;
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
      <MenuLink href="#charter">Charter</MenuLink>
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
      <MenuLink href="#leadvolt">LeadVolt</MenuLink>
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
      <MenuLink href="#storyRocket">Storyrocket</MenuLink>
    </MenuItem>
    <MenuItem onClick={onClick}>
      <MenuLink href="#weedmatch">Weedmatch</MenuLink>
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
