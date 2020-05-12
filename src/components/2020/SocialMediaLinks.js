import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { youtube } from 'react-icons-kit/fa/youtube';
import { instagram } from 'react-icons-kit/fa/instagram';
import { facebookF } from 'react-icons-kit/fa/facebookF';
import styled from 'styled-components';

const getColor = (color) => {
  switch (color) {
  case 'indigo':
    return '#264A60';
  case 'inherit':
    return color;
  case null:
  case undefined:
    return 'inherit';
  default:
    return color;
  }
};

const Link = styled.a`
  color: ${({ color }) => getColor(color)} !important;
`;

export const FacebookLink = ({ color }) => (
  <Link
    color={color}
    href="https://www.facebook.com/cobuildlab/"
    rel="noreferrer noopener"
    target="_blank">
    <Icon icon={facebookF} alt="facebook-icon" size={22} />
  </Link>
);
FacebookLink.defaultProps = {
  color: 'inherit',
};

FacebookLink.propTypes = {
  color: PropTypes.string,
};

export const InstagramLink = ({ color }) => (
  <Link
    color={color}
    href="https://www.instagram.com/cobuildlab/"
    rel="noreferrer noopener"
    target="_blank">
    <Icon icon={instagram} alt="instagram-icon" size={22} />
  </Link>
);

InstagramLink.defaultProps = {
  color: 'inherit',
};

InstagramLink.propTypes = {
  color: PropTypes.string,
};

export const YoutubeLink = ({ color }) => (
  <Link
    color={color}
    href="https://www.youtube.com/channel/UCdI6t05TWyASVdT_H0Sqt3A"
    rel="noreferrer noopener"
    target="_blank">
    <Icon icon={youtube} alt="youtube-icon" size={22} />
  </Link>
);

YoutubeLink.defaultProps = {
  color: 'inherit',
};

YoutubeLink.propTypes = {
  color: PropTypes.string,
};
