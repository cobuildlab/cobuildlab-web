import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonLoading from './ButtonLoading';
import { defaultOutlineStyle } from './common-css';
import styled from 'styled-components';

const Container = styled.button`
  ${defaultOutlineStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

const ButtonOutline = ({ children, isLoading, isBlock, type }) => (
  <Container type={type} isBlock={isBlock}>
    <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
  </Container>
);

ButtonOutline.defaultProps = {
  isLoading: false,
  type: 'button',
  isBlock: false,
};

ButtonOutline.propTypes = {
  isBlock: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(ButtonOutline);
