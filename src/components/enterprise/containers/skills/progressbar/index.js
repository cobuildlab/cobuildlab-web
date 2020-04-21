import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Typography from "../../../../2020/Typography";
import PropTypes from "prop-types";

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
            symbol: Percenteg + "%",
            color: Color
          }
        }}
      />
    </div>
  );
};

Progressbar.propTypes = {
  ProgressTitle: PropTypes.string.isRequired,
  ProgressClass: PropTypes.string.isRequired,
  Percenteg: PropTypes.string.isRequired,
  Class: PropTypes.string.isRequired,
  Color: PropTypes.string.isRequired
};

export default Progressbar;
