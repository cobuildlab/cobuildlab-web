import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ButtonLoading from './ButtonLoading';
import { defaultStyle, primaryStyle, secondaryStyle } from './common-css';

const ButtonDefault = styled.button`
  ${defaultStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

const ButtonPrimary = styled.button`
  ${primaryStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

const ButtonSecondary = styled.button`
  ${secondaryStyle}
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')}
`;

const LinkContainer = styled.div`
  & > a {
    width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  }
`;

const LinkDefault = styled(Link)`
  ${defaultStyle}
`;

const LinkPrimary = styled(Link)`
  ${primaryStyle}
`;

const LinkSecondary = styled(Link)`
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

const Button = ({ to, children, className, isLoading, htmlType, isBlock, type, ...rest }) => {
  if (to && to.length) {
    if (type === 'default') {
      return (
        <LinkContainer isBlock={isBlock}>
          <LinkDefault to={to} {...rest} type={htmlType}>
            <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
          </LinkDefault>
        </LinkContainer>
      );
    }

    if (type === 'primary') {
      return (
        <LinkContainer isBlock={isBlock}>
          <LinkPrimary to={to} {...rest} type={htmlType}>
            <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
          </LinkPrimary>
        </LinkContainer>
      );
    }

    if (type === 'secondary') {
      return (
        <LinkContainer isBlock={isBlock}>
          <LinkSecondary to={to} {...rest} type={htmlType}>
            <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
          </LinkSecondary>
        </LinkContainer>
      );
    }
  }

  if (type === 'default') {
    return (
      <ButtonDefault type={htmlType} isBlock={isBlock}>
        <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
      </ButtonDefault>
    );
  }

  if (type === 'primary') {
    return (
      <ButtonPrimary type={htmlType} isBlock={isBlock}>
        <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
      </ButtonPrimary>
    );
  }

  if (type === 'secondary') {
    return (
      <ButtonSecondary type={htmlType} isBlock={isBlock}>
        <ButtonLoading isLoading={isLoading}>{children}</ButtonLoading>
      </ButtonSecondary>
    );
  }
};

Button.defaultProps = {
  to: '',
  className: '',
  isLoading: false,
  type: 'default',
  htmlType: 'button',
  isBlock: false,
};

Button.propTypes = {
  isBlock: PropTypes.bool,
  htmlType: PropTypes.string,
  type: PropTypes.oneOf(['default', 'primary', 'secondary']),
  isLoading: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Button);
