import React from 'react';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import PreviewIcon from '../icon';
import PropTypes from 'prop-types';

/**
 * A Button.
 *
 * @param {object} props - Setup Props.
 * @returns {*} A Setup Button.
 * @class
 */
function Button(props) {
  return (
    <button className={props.class} onClick={props.clickable}>
      <span className={`title ${props.title ? props.title : ''}`}>{props.name}</span>
      {props.btnIcon && (
        <span className={props.btnIcon}>
          <PreviewIcon icon={chevronRight} />
        </span>
      )}
    </button>
  );
}

Button.defaultProps = {
  class: '',
  clickable: '',
  name: '',
};

Button.propTypes = {
  class: PropTypes.string,
  clickable: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  btnIcon: PropTypes.string,
};

Button.defaultProps = {
  title: null,
  btnIcon: null,
};

export default Button;
