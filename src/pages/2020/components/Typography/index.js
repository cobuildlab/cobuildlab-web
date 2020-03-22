import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import { componse } from '@2020/utils';
import styles from './css/index.module.scss';

/**
 * @property size object 
 * 
 */

const keys = ['lg', 'md', 'sm', 'default'];

const Typography = ({ 
  children, 
  size, 
  hasTextAlign, 
  className,
  tag,
}) => {

  let classNameSelect = '';
  let fontWeightSelect = '';

  keys.forEach(element => {
    if(size[element]){

      if(size[element].level){
        classNameSelect +=  styles[`font_size_${element}_${size[element].level}`] + ' ';
      }

      if(size[element].fontWeight){
        fontWeightSelect += styles[`font_${size[element].fontWeight}`] + ' '; 
      }
    }
  });

  return(
    <Title 
      tag={tag} 
      hasTextAlign={hasTextAlign}
      className={
        componse(
          styles.font, 
          classNameSelect, 
          className, 
          fontWeightSelect
        )}
    >
      {children}
    </Title>
  )
}

Typography.defaultProps = {
  size: {
    default: {
      level: 10,
      fontWeight: 'bold',
    }
  },
  tag: 'h1',
  className: '',
}

Typography.propTypes = {
  size: PropTypes.object,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export default memo(Typography);