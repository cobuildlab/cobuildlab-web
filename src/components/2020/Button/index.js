import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { loadC } from 'react-icons-kit/ionicons/loadC';
import Typography from '../Typography';
import componse from '../../../utils/styles-componse';
import styles from './css/index.module.scss';

const text = {
  default: {
    level: 11,
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
      <span className={iconContainerStyles}>
        <Icon size={20} icon={loadC} />
      </span>
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

const Button = ({ children, to, onClick, className, isLoading, type, ...rest }) => {
  const buttonStyles = componse(styles.button, styles[`button_${type}`], className);

  if (to && to.length) {
    return (
      <Link {...rest} to={to} className={buttonStyles}>
        <Loading isLoading={isLoading}>{children}</Loading>
      </Link>
    );
  }

  return (
    <button {...rest} className={buttonStyles}>
      <Loading isLoading={isLoading}>{children}</Loading>
    </button>
  );
};

Button.defaultProps = {
  to: '',
  onClick: () => null,
  className: '',
  isLoading: false,
  type: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Button);
