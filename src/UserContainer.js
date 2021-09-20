import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import Avatar from "@mui/material/Avatar";

const styles = {
  cardContainer: {
    marginBottom: "1vh",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20vw",
  },
  singleContainer: {
    minWidth: "100px",
  },
};

const renderUserCard = (user) => {
  console.log({ user });
  return (
    <Card variant="outlined" style={styles.cardContainer} key={user.id}>
      <CardContent style={styles.contentContainer}>
        <div style={styles.userContainer}>
          <div style={styles.singleContainer}>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </div>
          <Typography
            variant="body1"
            component="p"
            style={styles.singleContainer}
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            component="h2"
            color="textSecondary"
            style={styles.singleContainer}
          >
            {user.group}
          </Typography>
        </div>
        <Button>
          <InfoIcon />
        </Button>
      </CardContent>
      {/* <CardActions></CardActions> */}
    </Card>
  );
};

const UserContainer = (props) => {
  //   const { users, banUser } = props;

  const users = [
    {
      id: 1,
      name: "Mauro Stein",
      group: "Agent",
    },
    {
      id: 2,
      name: "John Doe",
      group: "Customer",
    },
    {
      id: 3,
      name: "Piet Smith",
      group: "Developer",
    },
  ];
  return users ? <div>{users.map((u) => renderUserCard(u))}</div> : <div />;
};

export default UserContainer;
// export default withStyles(styles)(UserContainer);
