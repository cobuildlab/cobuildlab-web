import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ButtonLoading from './ButtonLoading';
import { primaryStyle } from './common-css';
import LinkContainer from './LinkContainer';

const Redirect = styled(Link)`
  ${primaryStyle}
`;

/**
 * @author github @kikeztw
 * @param {string} to -  Link prop for button, this property adds <a> tag at the same time as a button.
 * @param {boolean} isLoading -   Loading indicator for button.
 * @param {string} type - Https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type.
 */

const LinkButtonPrimary = ({ to, children, isLoading, isBlock, ...rest }) => (
  <LinkContainer isBlock={isBlock}>
    <Redirect to={to} {...rest}>
      <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
    </Redirect>
  </LinkContainer>
);

LinkButtonPrimary.defaultProps = {
  to: '',
  isLoading: false,
  isBlock: false,
};

LinkButtonPrimary.propTypes = {
  isBlock: PropTypes.bool,
  isLoading: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(LinkButtonPrimary);
