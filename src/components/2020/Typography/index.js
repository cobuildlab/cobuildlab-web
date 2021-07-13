import React from 'react';
import PropTypes from 'prop-types';
import componse from '../../../utils/styles-componse';
import * as styles from './css/index.module.scss';

const keys = ['lg', 'md', 'sm', 'default'];

const _Typography = ({ children, size, hasTextAlign, className, tag }) => {
  let classNameSelect = '';
  let fontWeightSelect = '';

  keys.forEach((element) => {
    if (size[element]) {
      if (size[element].level) {
        classNameSelect += styles[`font_size_${element}_${size[element].level}`] + ' ';
      }

      if (size[element].fontWeight) {
        fontWeightSelect += styles[`font_${size[element].fontWeight}`] + ' ';
      }
    }
  });

  const result = componse(
    styles.font || {},
    classNameSelect,
    fontWeightSelect,
    className,
    hasTextAlign.length ? styles[`text_align_${hasTextAlign}`] : '',
  );

  return React.createElement(tag, { className: result }, children);
  // return React.createElement(tag, children);
};

_Typography.defaultProps = {
  size: {
    default: {
      // not config for default props
    },
  },
  tag: 'span',
  className: '',
  hasTextAlign: '',
};

_Typography.propTypes = {
  hasTextAlign: PropTypes.string,
  size: PropTypes.object,
  className: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Typography = React.memo(_Typography);
export default Typography;
export { Typography };
