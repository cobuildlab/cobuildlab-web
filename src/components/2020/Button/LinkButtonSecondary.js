import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ButtonLoading from './ButtonLoading';
import { secondaryStyle } from './common-css';
import LinkContainer from './LinkContainer';

const Redirect = styled(Link)`
  ${secondaryStyle}
`;

/**
 * @author github @kikeztw
 * @param {string} to -  Link prop for button, this property adds <a> tag at the same time as a button.
 * @param {string} className -  Styles for the button.
 * @param {boolean}   isLoading -   Loading indicator for button.
 * @param {string} type - Button type  default | primary | secondary.
 * @param {string} htmlType - Set the original html type of button see:
 *                         https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type.
 */

const LinkButtonSecondary = ({ to, children, isLoading, isBlock, ...rest }) => (
  <LinkContainer isBlock={isBlock}>
    <Redirect to={to} {...rest}>
      <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
    </Redirect>
  </LinkContainer>
);

LinkButtonSecondary.defaultProps = {
  to: '',
  isLoading: false,
  isBlock: false,
};

LinkButtonSecondary.propTypes = {
  isBlock: PropTypes.bool,
  isLoading: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(LinkButtonSecondary);
