import React from 'react';
import { Title } from '../../../components/title';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

/**
 * @param props
 */
function Progressbar(props) {
  return (
    <div className="progressbar-wrapper">
      <Title Class={props.ProgressClass} Name={props.ProgressTitle} />
      <Progress
        percent={props.Percenteg}
        className={props.Class}
        status="error"
        theme={{
          error: {
            symbol: props.Percenteg + '%',
            color: props.Color,
          },
        }}
      />
    </div>
  );
}

export default Progressbar;
