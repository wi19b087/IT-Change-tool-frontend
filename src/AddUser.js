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
  cardContainer: {
    marginBottom: "1vh",
    // height: "100vh",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userContainer: {
    // height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "20vw",
    flexWrap: "wrap",
  },
  singleContainer: {
    minWidth: 220,
    // minWidth: "10vw",
    margin: "1vh",
    // height: "100vh",
    overflow: "visible",
  },
  menuItem: {
    display: "block",
    padding: "2vh",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    minWidth: 100,
  },
};

const AddUser = (props) => {
  const [group, setGroup] = React.useState();
  return (
    <div>
      <Card
        variant="outlined"
        style={styles.cardContainer}
        key={"add-new-user-1"}
      >
        <CardContent style={styles.contentContainer}>
          <div style={styles.userContainer}>
            <TextField
              id="outlined-name"
              label="Name"
              onChange={undefined}
              style={styles.singleContainer}
            />
            <TextField
              id="outlined-name"
              label="E-mail"
              onChange={undefined}
              style={styles.singleContainer}
            />
            <TextField
              id="outlined-name"
              label="Password"
              onChange={undefined}
              style={styles.singleContainer}
            />
            <FormControl style={styles.singleContainer}>
              <InputLabel id="demo-simple-select-label">Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={group}
                label="Group"
                onChange={(e) => setGroup(e.target.value)}
              >
                <MenuItem value={"Customer"} style={styles.menuItem}>
                  Customer
                </MenuItem>
                <MenuItem value={"Service Agent"} style={styles.menuItem}>
                  Service Agent
                </MenuItem>
                <MenuItem value={"Developer"} style={styles.menuItem}>
                  Developer
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained" style={styles.button}>
            Add
          </Button>
        </CardContent>
        {/* <Button>
          <InfoIcon />
        </Button> */}
        {/* <CardActions></CardActions> */}
      </Card>
    </div>
  );
};

export default AddUser;
