/* eslint-disable react/prop-types */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import '../assets/css/index.css';

const Loading = (props) => {
  return (
    <div className="loading">
      <ClipLoader size={40} color={'#e76c29'} loading={props.loading} />
    </div>
  );
};

export default Loading;
