import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import { componse } from '@2020/utils';
import styles from './css/index.module.scss';

/**
 * @property size | hero | h1 | h2 | h3 | h4 | h5 | h6
 * 
 */

const CustomTitlte = ({ 
  children, 
  size, 
  hasTextAlign, 
  className,
}) => {

  let sizeStyle, tag;

  switch(size){
    case 'hero':
      sizeStyle = styles.title_hero;
      tag = 'h1';
      break;
    case 'h1':
      sizeStyle = styles.title_h1;
      tag = 'h1';
      break;
    case 'h2':
      sizeStyle = styles.title_h2;
      tag = 'h2';
      break;
    case 'h3':
      sizeStyle = styles.title_h3;
      tag = 'h3';
      break;
    case 'h4':
      sizeStyle = styles.title_h4;
      tag = 'h4';
      break;
    case 'h5':
      sizeStyle = styles.title_h5;
      tag = 'h5';
      break;
    case 'h6':
      sizeStyle = styles.title_h6;
      tag = 'h6';
      break;
    case 'subTitle':
      sizeStyle = styles.title_sub_title;
      tag = 'h2';
      break;
    default:
      sizeStyle = styles.title_hero;
      tag = 'h1';
      break;
  }

  return(
    <Title 
      tag={tag} 
      hasTextAlign={hasTextAlign}
      className={componse(styles.title, sizeStyle, className)}
    >
      {children}
    </Title>
  )
}

CustomTitlte.defaultProps = {
  size: 'hero',
  tag: 'h1',
  className: ''
}

CustomTitlte.propTypes = {
  size: PropTypes.string,
  hasTextAlign: PropTypes.string,
  className: PropTypes.string
}

export default memo(CustomTitlte);