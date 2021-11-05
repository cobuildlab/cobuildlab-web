import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLoading from './ButtonLoading';
import { defaultStyle } from './common-css';

const Container = styled.button`
  ${defaultStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  height: ${({ isFullHeight }) => (isFullHeight ? '100%' : 'auto')};
`;

/**
 * @author github @kikeztw
 * @param {string} to -  Link prop for button, this property adds <a> tag at the same time as a button.
 * @param {string} className -  Styles for the button.
 * @param {boolean}   isLoading -   Loading indicator for button.
 * @param {string} type - ButtonDefault type  default | primary | secondary.
 * @param {string} htmlType - Set the original html type of button see:
 *                         https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type.
 */

const ButtonDefault = ({
  children,
  isLoading,
  isBlock,
  type,
  onClick,
  isCapitalize,
  isFullHeight,
}) => (
  <Container onClick={onClick} type={type} isBlock={isBlock} isFullHeight={isFullHeight}>
    <ButtonLoading isLoading={isLoading} isCapitalize={isCapitalize}>
      {children}
    </ButtonLoading>
  </Container>
);

ButtonDefault.defaultProps = {
  isLoading: false,
  type: 'button',
  isBlock: false,
  onClick: () => null,
  isCapitalize: true,
  isFullHeight: false,
};

ButtonDefault.propTypes = {
  onClick: PropTypes.func,
  isBlock: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isCapitalize: PropTypes.bool,
  isFullHeight: PropTypes.bool,
};

export default memo(ButtonDefault);
