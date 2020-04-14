import React from 'react';
import Success from '../components/Toast/Success';
import { ToastContainer, toast } from 'react-toastify';

const Test = () => (
  <div>
    <button
      onClick={() => {
        toast(<Success message="this is a test message" />);
      }}>
      test me
    </button>
    <ToastContainer hideProgressBar />
  </div>
);

export default Test;
