import React from "react";
import classes from "./InfoBox.module.css";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function InfoBox({ heading, data, unit }) {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>{heading}</div>
      <div className={classes.info}>
        <div className={classes.data}>
          <div className={classes.val1}>{data}</div>
          <div className={classes.val2}>{unit}</div>
        </div>
        <TrendingDownIcon sx={{ fontSize: 24, color: "rgb(0, 134, 216)" }} />
      </div>
    </div>
  );
}

export default InfoBox;
