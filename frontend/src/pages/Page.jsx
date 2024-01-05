import DropDownMenu from "../components/DropDownMenu";
import classes from "./Page.module.css";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import InfoBox from "../components/InfoBox";
import Graph from "../components/Graph";

const arr1 = [
  { text: "All", val: "all" },
  { text: "Day", val: "day" },
  { text: "Evening", val: "evening" },
  { text: "Night", val: "night" },
];
const arr2 = [
  { text: "Hourly", val: "hourly" },
  { text: "Daily", val: "daily" },
  { text: "Monthly", val: "monthly" },
];

const data = [
  {
    heading: "Health",
    data: "98.34",
    unit: "%",
  },
  {
    heading: "Efficiency",
    data: "98.34",
    unit: "%",
  },
  {
    heading: "Steam Consumption",
    data: "98.34",
    unit: "T/hr",
  },
  {
    heading: "Wet Gas Flow",
    data: "98.34",
    unit: "T/hr",
  },
  {
    heading: "Time To Failure",
    data: "44",
    unit: "Weeks",
  },
  {
    heading: "Power Consumption",
    data: "45",
    unit: "MW",
  },
  {
    heading: "Interstage Cooler Temp.",
    data: "98.34",
    unit: "*C",
  },
  {
    heading: "Suction Pressure",
    data: "98.34",
    unit: "kg/cm^2",
  },
];

const data2 = [
  {
    heading: "Turbine Shaft Axial Displ.",
    data: "98.34",
    unit: "um",
  },
  {
    heading: "Compressor Shaft Axial Displ.",
    data: "45",
    unit: "um",
  },
  {
    heading: "Turbine Shaft Vibration - NDE",
    data: "98.34",
    unit: "um",
  },
  {
    heading: "Turbine Shaft Vibration - NDE",
    data: "98.34",
    unit: "um",
  },
  {
    heading: "Turbine Shaft vVibration - ND",
    data: "45",
    unit: "um",
  },
  {
    heading: "Turbine Shaft vVibration - ND",
    data: "45",
    unit: "um",
  },
];

function Page() {
  const date = "05/01/2024";
  const time = "12:00:00";
  const [setting, setSetting] = useState(false);
  const [detailData, setDetail] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.leftHeading}>
          <span className={classes.mainHeading}>WET GAS COMPRESSOR</span>
          <span className={classes.subHeading}>
            As on {date} {time}
          </span>
        </div>
        <div className={classes.rightHeading}>
          <DropDownMenu options={arr1} />
          <DropDownMenu options={arr2} />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.leftContent}>
          <div className={classes.heading2}>
            <div className={classes.relatedButton}>
              Related Documents
              <ArrowDropDownIcon />
            </div>
            <div
              onMouseEnter={() => {
                setDetail(true);
              }}
              onMouseLeave={() => {
                setDetail(false);
              }}
              className={classes.detailButton}
            >
              Details
              {detailData && (
                <div className={classes.detail}>
                  <h3>Some More Data</h3>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vero, voluptatibus quaerat animi iure voluptatum, suscipit
                  culpa quos repellat fuga placeat quia minima mollitia
                  inventore deserunt quod. Explicabo sit corporis, nisi
                  repellendus rem veritatis cum incidunt voluptatibus error,
                  quasi minus est, necessitatibus sapiente iste at fugit
                  reiciendis modi! Harum, nostrum temporibus.
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => {
                setSetting(true);
              }}
              onMouseLeave={() => {
                setSetting(false);
              }}
              className={classes.settingButton}
            >
              <SettingsIcon />
              {setting && (
                <div className={classes.settingOptions}>
                  <div className={classes.settingOption}>
                    <input type="checkbox" />
                    <span>Show Tag Values</span>
                  </div>
                  <div className={classes.settingOption}>
                    <input type="checkbox" />
                    <span>Show Tag Values Trends</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: "13px" }}>
            Under Development
          </div>
          <div className={classes.bottomBox}>
            <div className={classes.legendButton}>Legends</div>
            <div className={classes.box2}>
              <div className={classes.zoomBox}>
                <ZoomOutIcon className={classes.zoomController} />
                <span>100%</span>
                <ZoomInIcon className={classes.zoomController} />
              </div>
              <div className={classes.zoomIcon}>
                <ZoomOutMapIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.dataGrid}>
            {data.map((item, index) => (
              <InfoBox
                key={index}
                heading={item.heading}
                data={item.data}
                unit={item.unit}
                className={classes.item}
              />
            ))}
          </div>
          <div className={classes.container2}>
            <div className={classes.graphContainer}>
              <div className={classes.gc}>
                <span className={classes.graphHeading}>
                  Efficiency Anomaly Score
                </span>
                <Graph />
              </div>
              <div className={classes.gc}>
                <span className={classes.graphHeading}>
                  Efficiency Anomaly Score
                </span>
                <Graph />
              </div>
            </div>
            <div className={classes.tagContainer}>
              <div className={classes.heading3}>Trip Tags</div>
              <div className={classes.dataGrid2}>
                {data2.map((item, index) => (
                  <InfoBox
                    key={index}
                    heading={item.heading}
                    data={item.data}
                    unit={item.unit}
                    className={classes.item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
