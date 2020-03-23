import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button as BloomerButton } from 'bloomer';
import { Link } from 'gatsby';
import componse from '@2020/utils/StyleComponse';
import styles from './css/index.module.scss';

const Button = ({ children, to, onClick, className }) => {
  if (to) {
    return (
      <BloomerButton
        render={(props) => (
          <Link {...props} to={to} className={componse(styles.button_primary, props.className)} />
        )}>
        {children}
      </BloomerButton>
    );
  }

  return (
    <BloomerButton
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
