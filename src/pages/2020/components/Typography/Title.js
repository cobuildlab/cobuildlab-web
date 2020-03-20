import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import { componse } from '@2020/utils';
import styles from './css/index.module.scss';

/**
 * @property size | hero | h1 | h2 | h3 | h4 | h5 | h6
 * 
 */

const defaultSize = {
  hero:{
    tag: 'h1',
    className: styles.title_hero,
  },
  h1:{
    tag: 'h1',
    className: styles.title_h1,
  },
  h2:{
    tag: 'h2',
    className: styles.title_h2,
  },
  h3:{
    tag: 'h3',
    className: styles.title_h3,
  },
  h4:{
    tag: 'h4',
    className: styles.title_h4,
  },
  h5:{
    tag: 'h5',
    className: styles.title_h5,
  },
  h6:{
    tag: 'h6',
    className: styles.title_h6,
  },
  subTitle:{
    tag: 'h2',
    className: styles.title_sub_title,
  }
}

const CustomTitlte = ({ 
  children, 
  size, 
  hasTextAlign, 
  className,
  fontWeight,
}) => {
  return(
    <Title 
      tag={defaultSize[size]? defaultSize[size].tag : ''} 
      hasTextAlign={hasTextAlign}
      className={
        componse(
          styles.title, 
          defaultSize[size]? defaultSize[size].className : '', 
          className, 
          styles[`title_${fontWeight}`]
        )}
    >
      {children}
    </Title>
  )
}

CustomTitlte.defaultProps = {
  size: 'hero',
  tag: 'h1',
  className: '',
  fontWeight: '',
}

CustomTitlte.propTypes = {
  size: PropTypes.string,
  hasTextAlign: PropTypes.string,
  className: PropTypes.string,
  fontWeight: PropTypes.string
}

export default memo(CustomTitlte);