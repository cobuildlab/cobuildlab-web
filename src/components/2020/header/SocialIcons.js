import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavbarItem } from 'bloomer';
import { FacebookLink, InstagramLink, YoutubeLink } from '../SocialMediaLinks';

const SocialIcon = ({ isHidden }) => (
  <Fragment>
    <NavbarItem isHidden={isHidden}>
      <FacebookLink color="indigo" />
    </NavbarItem>
    <NavbarItem isHidden={isHidden}>
      <InstagramLink color="indigo" />
    </NavbarItem>
    <NavbarItem isHidden={isHidden}>
      <YoutubeLink color="indigo" />
    </NavbarItem>
  </Fragment>
);

SocialIcon.defaultProps = {
  isHidden: '',
};

SocialIcon.propTypes = {
  isHidden: PropTypes.string,
};

export default SocialIcon;
