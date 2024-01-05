import React from "react";
import classes from "./SideNavBar.module.css";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PowerIcon from "@mui/icons-material/Power";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import AirIcon from "@mui/icons-material/Air";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import ScienceIcon from "@mui/icons-material/Science";

const list1 = [
  {
    icon: <AppsIcon />,
    name: "INDMAX Performance",
  },
  {
    icon: <ScienceIcon />,
    name: "Reactor Regenerator",
  },
  {
    icon: <OfflineBoltIcon />,
    name: "Main Fractionator",
  },
  {
    icon: <LocalFireDepartmentIcon />,
    name: "Waste Heat Boiler",
  },
  {
    icon: <AirIcon />,
    name: "Main Air Blower",
  },
  {
    icon: <GasMeterIcon />,
    name: "Wet Gas Compressor",
  },
  {
    icon: <PowerIcon />,
    name: "Power Recovery Turbine",
  },
];
const list2 = [
  {
    icon: <HelpCenterIcon />,
    name: "What-If Analysis",
  },
  {
    icon: <FindInPageIcon />,
    name: "Data Analysis",
  },
  {
    icon: <SettingsIcon />,
    name: "Tool Settings",
  },
];

function SideNavBar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState([1, 5]);
  return (
    <nav className={`${classes.navbar} ${open ? classes.open : ""}`}>
      <div className={classes.container}>
        {open ? (
          <div className={classes.closeButton}>
            <ArrowBackIcon
              onClick={() => {
                setOpen(false);
              }}
              className={classes.closeIcon}
              sx={{ fontSize: 34 }}
            />
          </div>
        ) : (
          <div className={classes.menuButton}>
            <MenuIcon
              onClick={() => {
                setOpen(true);
              }}
              className={classes.menuIcon}
              sx={{ fontSize: 34 }}
            />
          </div>
        )}
        <Divider />
        <ul className={classes.list}>
          {list1.map((item, index) => (
            <li
              onClick={() => {
                setActiveLink([1, index]);
              }}
              key={index}
              className={`${classes.listItem} ${open ? classes.open : ""} ${
                activeLink[0] === 1 && activeLink[1] === index
                  ? classes.active
                  : ""
              }`}
            >
              <div
                className={`${classes.icon}
                  ${open ? classes.open : ""} ${
                  activeLink[0] === 1 && activeLink[1] === index
                    ? classes.active
                    : ""
                }`}
              >
                {item.icon}
              </div>
              {open && <span className={classes.name}>{item.name}</span>}
            </li>
          ))}
        </ul>
        <Divider />
        <ul className={classes.list}>
          {list2.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveLink([2, index]);
              }}
              className={`${classes.listItem} ${open ? classes.open : ""} ${
                activeLink[0] === 2 && activeLink[1] === index
                  ? classes.active
                  : ""
              }`}
            >
              <div
                className={`${classes.icon} ${open ? classes.open : ""} ${
                  activeLink[0] === 2 && activeLink[1] === index
                    ? classes.active
                    : ""
                }`}
              >
                {item.icon}
              </div>
              {open && <span className={classes.name}>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideNavBar;
