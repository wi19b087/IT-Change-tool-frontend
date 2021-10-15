import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const styles = {
  singleContainer: {
    minWidth: 220,
    margin: "1vh",
    overflow: "visible",
  },
  menuItem: {
    display: "block",
    padding: "2vh",
  },
};

const createMenuItems = (items) => {
  return items.map((i) => {
    return (
      <MenuItem value={i.name} style={styles.menuItem}>
        {i.name}
      </MenuItem>
    );
  });
};

const DropDown = (props) => {
  const { items, label } = props;
  const [selected, setSelected] = useState();
  return (
    <FormControl style={styles.singleContainer}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label={label}
        onChange={(e) => setSelected(e.target.value)}
      >
        {createMenuItems(items)}
      </Select>
    </FormControl>
  );
};

export default DropDown;
