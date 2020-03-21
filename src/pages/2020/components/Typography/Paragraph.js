import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'bloomer';
import { componse } from '@2020/utils';
import styles from './css/index.module.scss';


const Paragraph = ({ 
    children, 
    hasTextAlign, 
    fontSize,
    className 
}) => (
  <Title 
    style={fontSize ? { fontSize } : {}}
    className={componse(styles.paragraph, className)}
    hasTextAlign={hasTextAlign} 
    tag="p" >
    {children}
  </Title>
);

Paragraph.defaultProps = {
  className: ''
}

Paragraph.propTypes = {
  className: PropTypes.string,
}

export default memo(Paragraph);