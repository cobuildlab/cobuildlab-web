import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import Typography from '../../../../2020/Typography';

const Progressbar = ({ ProgressTitle, ProgressClass, Percenteg, Class, Color }) => {
  return (
    <div className="progressbar-wrapper">
      <Typography className={ProgressClass} tag="p">
        {ProgressTitle}
      </Typography>
      <Progress
        percent={Percenteg}
        className={Class}
        status="error"
        theme={{
          error: {
            symbol: Percenteg + '%',
            color: Color,
          },
        }}
      />
    </div>
  );
};

export default Progressbar;
