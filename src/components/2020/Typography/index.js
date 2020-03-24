import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import componse from '../../../utils/styles-componse';
import styles from './css/index.module.scss';

const keys = ['lg', 'md', 'sm', 'default'];

const Typography = ({ children, size, hasTextAlign, className, tag }) => {
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
    styles.font, 
    classNameSelect, 
    className, 
    fontWeightSelect
  );

  return (
    <Title
      tag={tag}
      hasTextAlign={hasTextAlign}
      className={result}>
      {children}
    </Title>
  );
};

Typography.defaultProps = {
  size: {
    default: {
      level: 10,
      fontWeight: 'bold',
    },
  },
  tag: 'span',
  className: '',
  hasTextAlign: '',
};

Typography.propTypes = {
  hasTextAlign: PropTypes.string,
  size: PropTypes.object,
  className: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default memo(Typography);
