import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import '../assets/css/index.css';

const Loading = (props) => {
  return (
    <div className="loading">
      <ClipLoader size={40} color={'#e76c29'} loading={props.loading} />
    </div>
  );
};

Loading.propTypes = [
  {
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  },
];

export default Loading;
