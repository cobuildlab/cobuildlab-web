import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonLoading from './ButtonLoading';
import { defaultOutlineStyle, primaryOutlineStyle } from './common-css';
import styled from 'styled-components';

const Container = styled.button`
  ${defaultOutlineStyle}
  ${({ isActive }) => (isActive ? primaryOutlineStyle : '')}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

const ButtonOutline = ({ children, isActive, isLoading, isBlock, type, onClick }) => (
  <Container type={type} isActive={isActive} isBlock={isBlock} onClick={onClick}>
    <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
  </Container>
);

ButtonOutline.defaultProps = {
  isActive: false,
  isLoading: false,
  type: 'button',
  isBlock: false,
  onClick: (e) => {},
};

ButtonOutline.propTypes = {
  isActive: PropTypes.bool,
  isBlock: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
};

export default memo(ButtonOutline);
