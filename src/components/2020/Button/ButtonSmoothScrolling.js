import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import ButtonDefault from './ButtonDefault';

const Link = styled(AnchorLink)`
  color: inherit;
  &:hover,
  &:focus {
    color: inherit;
  }
`;

const SmoothScrollingButton = ({ href, children }) => (
  <ButtonDefault>
    <Link href={href}>{children}</Link>
  </ButtonDefault>
);
SmoothScrollingButton.defaultProps = {};
SmoothScrollingButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SmoothScrollingButton;
