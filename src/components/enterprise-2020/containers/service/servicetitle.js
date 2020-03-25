import React from 'react';

/**
 * @param props
 */
function ServiceTitle(props) {
  return (
    <h4 className={props.Class}>
      {' '}
      <span className="label">{props.Label}</span> {props.Name}{' '}
      <span className="label1">{props.Label1}</span>{' '}
    </h4>
  );
}

export default ServiceTitle;
