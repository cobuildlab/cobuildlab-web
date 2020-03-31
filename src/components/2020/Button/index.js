import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button as BloomerButton } from 'bloomer';
import { Link } from 'gatsby';
import componse from '../../../utils/styles-componse';
import styles from './css/index.module.scss';

const Button = ({ children, to, onClick, className, ...rest }) => {
  if (to) {
    return (
      <BloomerButton
        {...rest}
        render={(props) => (
          <Link {...props} to={to} className={componse(styles.button_primary, props.className)} />
        )}>
        {children}
      </BloomerButton>
    );
  }

  return (
    <BloomerButton
      {...rest}
      onClick={onClick}
      className={className ? componse(styles.button_primary, className) : styles.button_primary}>
      {children}
    </BloomerButton>
  );
};

Button.defaultProps = {
  to: '',
  onClick: () => null,
  className: '',
};

Button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Button);
