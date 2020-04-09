import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import Button from './2020/Button';

const Link = styled(AnchorLink)`
  color: inherit;
  &:hover,
  &:focus {
    color: inherit;
  }
`;

const SmoothScrollingButton = ({ href, children, type }) => (
  <Button type={type}>
    <Link href={href}>{children}</Link>
  </Button>
);
SmoothScrollingButton.defaultProps = {
  type: 'default',
};
SmoothScrollingButton.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SmoothScrollingButton;
