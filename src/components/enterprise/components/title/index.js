import React from 'react';
import Typrography from '../../../2020/Typography';


const Maintitle = (props) => {
  return (
    <div className="main-title-wrapper">
      <h3 className={props.Class}>{props.Name}</h3>
    </div>
  );
};

const Subtitle = (props) => {
  return (
    <div className="sub-title-wrapper">
      <h4 className={props.Class}>{props.Name}</h4>
    </div>
  );
};


const Description = (props) => {
  return <p className={props.Class}>{props.Name}</p>;
};

const Title = (props) => {
  return <h5 className={props.Class}>{props.Name}</h5>;
};

const Titlespan = ({ Class, Name, Label, tag = 'h4', children }) => {
  const innerText = `${Name} ${Label}`;

  if(children){
    return (
      <Typrography 
        tag={tag} 
        className={Class} 
        size={{ default: { fontWeight: 'bold' }}}
      >
        {innerText}
      </Typrography>
    );
  }
 
  return null;
};


const Titlespan2 = (props) => {
  return (
    <h4 className={props.Class}>
      {' '}
      {props.Name} <span>{props.Label}</span>{' '}
    </h4>
  );
};

export { Maintitle, Subtitle, Description, Title, Titlespan, Titlespan2 };
