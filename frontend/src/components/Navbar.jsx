import React, { useState } from "react";
import classes from "./Navbar.module.css";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SettingsIcon from "@mui/icons-material/Settings";
import TextFieldsIcon from "@mui/icons-material/TextFields";

function Navbar() {
  const [open, setOpen] = useState(false);
  const date = "05/01/2024";
  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes.leftNav}>
          <div className={` ${classes.logo} ${classes.logo1}`}>
            Digital Twin
          </div>
          <div className={`${classes.logo} ${classes.logo2}`}>|</div>
          <div className={`${classes.logo} ${classes.logo3}`}>INDMAX</div>
        </div>
        <div className={classes.rightNav}>
          <div className={classes.lastUpdated}>Last Updated on : {date}</div>
          <div className={classes.fontButton}>
            <div className={classes.button}>-</div>
            <TextFieldsIcon sx={{ fontSize: 20, margin: "0 4px" }} />
            <div className={classes.button}>+</div>
          </div>
          <div className={classes.cubeIcon}>
            <ViewInArIcon />
          </div>
          <div className={classes.bellIcon}>
            <NotificationsIcon />
          </div>
          <div onClick={() => setOpen(!open)} className={classes.profile}>
            <AccountCircleIcon />

            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            {open && (
              <div className={classes.dropdownMenu}>
                <div className={classes.option}>Profile Setting</div>
                <div className={classes.option}>Walkthrough</div>
                <div className={classes.option}>Sign Out</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
