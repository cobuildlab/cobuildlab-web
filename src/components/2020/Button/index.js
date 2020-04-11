import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Typography from '../Typography';
import componse from '../../../utils/styles-componse';
import styles from './css/index.module.scss';

const text = {
  default: {
    fontWeight: 'normal',
  },
};

const Loading = ({ isLoading, children }) => {
  const childrenContainerStyle = styles[`display_${isLoading ? 'hidden' : 'block'}`];
  const iconContainerStyles = componse(
    styles.icon_container,
    !isLoading ? styles.display_hidden : '',
  );

  return (
    <Fragment>
      <span className={iconContainerStyles} />
      <div className={childrenContainerStyle}>
        <Typography tag="span" size={text} className={styles.button_text}>
          {children}
        </Typography>
      </div>
    </Fragment>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

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
  const buttonStyles = componse(
    styles.button,
    styles[`button_${type}`],
    className,
    isBlock ? styles.button_block : '',
  );

  if (to && to.length) {
    return (
      <Link {...rest} to={to} className={buttonStyles}>
        <Loading isLoading={isLoading}>{children}</Loading>
      </Link>
    );
  }

  return (
    <button type={htmlType} {...rest} className={buttonStyles}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </button>
  );
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
