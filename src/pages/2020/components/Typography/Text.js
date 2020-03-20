import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import { componse } from '@2020/utils';
import styles from './css/index.module.scss';

/**
 * @property size | hero | h1 | h2 | h3 | h4 | h5 | h6
 * 
 */

const Text = ({ children, size, hasTextAlign, className }) => {

  let sizeStyle, tag;

  switch(size){
    case 'hero':
      sizeStyle = styles.title_hero;
      tag = 'h1';
      break;
    default:
      sizeStyle = styles.title_hero;
      tag = 'h1';
      break;
  }

  return null
}

Text.defaultProps = {
  size: 'hero',
  tag: 'h1',
  className: ''
}

Text.propTypes = {
  size: PropTypes.string,
  hasTextAlign: PropTypes.string,
  className: PropTypes.string,
}

export default memo(Text);