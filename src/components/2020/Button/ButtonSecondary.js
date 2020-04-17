import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLoading from './ButtonLoading';
import { secondaryStyle } from './common-css';

const Container = styled.button`
  ${secondaryStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

/**
 * @author github @kikeztw
 * @param {string} to -  Link prop for button, this property adds <a> tag at the same time as a button.
 * @param {string} className -  Styles for the button.
 * @param {boolean}   isLoading -   Loading indicator for button.
 * @param {string} type - ButtonSecondary type  default | primary | secondary.
 * @param {string} htmlType - Set the original html type of button see:
 *                         https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type.
 */

const ButtonSecondary = ({ children, isLoading, isBlock, type }) => (
  <Container type={type} isBlock={isBlock}>
    <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
  </Container>
);

ButtonSecondary.defaultProps = {
  isLoading: false,
  type: 'button',
  isBlock: false,
};

ButtonSecondary.propTypes = {
  isBlock: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(ButtonSecondary);
