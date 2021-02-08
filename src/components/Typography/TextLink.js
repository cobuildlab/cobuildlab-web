import React from 'react';
import PropTypes from 'prop-types';
import { LinkOrange } from '../2021/text/TextHelpers';

const TextLink = ({ to, children }) => (
  <LinkOrange href={to} target="_blank" rel="noreferrer noopener">
    {children}
  </LinkOrange>
);

TextLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default TextLink;
