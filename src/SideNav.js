import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@mui/material/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BatchPredictionSharpIcon from "@mui/icons-material/BatchPredictionSharp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  selectedItem: {
    backgroundColor: "#DADADA",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function SideNav(props) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState("Home");

  return (
    <div className={classes.root}>
      <Paper>
        <Divider />
        <List>
          <ListItem
            button
            key={"home"}
            className={currentPage === "home" ? classes.selectedItem : null}
            onFocus={() => setCurrentPage("home")}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem
            button
            key={"users"}
            className={currentPage === "users" ? classes.selectedItem : null}
            onFocus={() => setCurrentPage("users")}
          >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Users"} />
          </ListItem>
          <ListItem
            button
            key={"running-services"}
            className={
              currentPage === "running-services" ? classes.selectedItem : null
            }
            onFocus={() => setCurrentPage("running-services")}
          >
            <ListItemIcon>
              <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary={"Running services"} />
          </ListItem>
          <ListItem
            button
            key={"completed-services"}
            className={
              currentPage === "completed-services" ? classes.selectedItem : null
            }
            onFocus={() => setCurrentPage("completed-services")}
          >
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary={"Completed services"} />
          </ListItem>
          <ListItem
            button
            key={"create-ticket"}
            className={
              currentPage === "create-ticket" ? classes.selectedItem : null
            }
            onFocus={() => setCurrentPage("create-ticket")}
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary={"Create ticket"} />
          </ListItem>
          <ListItem
            button
            key={"systems"}
            className={currentPage === "systems" ? classes.selectedItem : null}
            onFocus={() => setCurrentPage("systems")}
          >
            <ListItemIcon>
              <BatchPredictionSharpIcon />
            </ListItemIcon>
            <ListItemText primary={"Systems"} />
          </ListItem>
        </List>
        <Divider />
      </Paper>
    </div>
  );
}

export default SideNav;
