import React, { memo } from 'react';
import { Button } from 'bloomer';
import { Link } from 'gatsby';
import componse from '@2020/utils/StyleComponse';
import styles from './css/index.module.scss';

export default memo(({ children, to, onClick, className }) => {

  if(to){
    return (
      <Button 
        render={(props) => (
          <Link  {...props} to={to} className={componse(styles.button_primary, props.className)} />
        )
      }>
        {children} 
      </Button>
    )
  }

  return(
    <Button 
      onClick={onClick}
      className={ className ? componse(styles.button_primary, className) : styles.button_primary}
    >
      {children}
    </Button>
  )
})