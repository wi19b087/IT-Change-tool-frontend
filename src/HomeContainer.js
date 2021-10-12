import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import Avatar from "@mui/material/Avatar";

import AddUser from "./AddUser";

const styles = {
  cardContainer: {
    marginBottom: "1vh",
    minWidth: "400px",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singleContainer: {
    minWidth: "100px",
  },
};

const HomeContainer = (props) => {
  //   const { users, banUser } = props;

  return (
    <div>
      <Card
        variant="outlined"
        style={styles.cardContainer}
        key={"home-container-card"}
      >
        <CardContent style={styles.contentContainer}>SCHEDULER</CardContent>
        {/* <Button>
          <InfoIcon />
        </Button> */}
        {/* <CardActions></CardActions> */}
      </Card>
    </div>
  );
};

export default HomeContainer;
// export default withStyles(styles)(HomeContainer);
