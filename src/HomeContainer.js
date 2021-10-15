import React, { useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import SchedulerContainer from "./SchedulerContainer";
import DropDown from "./DropDown";

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
  //   const { runningServices, completedServices } = props;
  const runningServices = [
    {
      name: "Update Azure",
    },
    {
      name: "Update Google Cloud",
    },
  ];
  return (
    <div>
      <DropDown label="Running services" items={runningServices} />
      <DropDown label="Completed services" items={runningServices} />
      <Card
        variant="outlined"
        style={styles.cardContainer}
        key={"home-container-card"}
      >
        <CardContent style={styles.contentContainer}>
          <SchedulerContainer />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeContainer;
// export default withStyles(styles)(HomeContainer);
