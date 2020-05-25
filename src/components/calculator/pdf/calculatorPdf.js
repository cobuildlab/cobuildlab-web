import React from 'react';
import { pdf } from '@react-pdf/renderer';
import template from './template';

const calculatorPdf = ({ data }) => {
  const onClick = async () => {
    const documentData = template({ data, total: 300 });
    const blob = await pdf(documentData).toBlob();
    console.log('blod', blob);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
      const result = reader.result;
      console.log('pdf in base64', result);
    };
  };

  return (
    <div>
      <button onClick={onClick}>get pdf</button>
    </div>
  );
};

export default calculatorPdf;
