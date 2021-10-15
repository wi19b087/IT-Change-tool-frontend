import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

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

const DropDown = (props) => {
  const { items, label } = props;
  const [selected, setSelected] = React.useState();
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
        <MenuItem value={"Customer"} style={styles.menuItem}>
          Running service 1
        </MenuItem>
        <MenuItem value={"Service Agent"} style={styles.menuItem}>
          Running service 2
        </MenuItem>
        <MenuItem value={"Developer"} style={styles.menuItem}>
          Running service 3
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
