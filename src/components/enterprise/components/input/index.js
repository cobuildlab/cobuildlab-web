import React from 'react';
import { Input } from 'reactstrap';

/**
 *
 */
export default function InputBox({ Type, Name, ...props }) {
  const onChangeValue = (e) => {
    props.ChangeValue(e.target.value);
  };

  return (
    <Input
      type={Type}
      name={Name}
      id={props.Id}
      value={props.Value}
      className={props.Class}
      placeholder={props.PlaceHolder}
      onChange={props.changeValue ? onChangeValue : null}
    />
  );
}
