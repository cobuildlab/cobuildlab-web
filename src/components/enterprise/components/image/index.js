import React from 'react';

/**
 * @param props
 */
function Image(props) {
  return <img src={props.Path} className={props.Class} title={props.Title} alt={props.Alt} />;
}

export default Image;
