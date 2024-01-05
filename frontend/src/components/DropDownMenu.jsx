import React, { useState } from "react";
import classes from "./DropDownMenu.module.css";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.dropdown}>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className={classes.dropdownSelect}
      >
        {options.map((item, index) => (
          <option key={index} className={classes.option} value={item.val}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
