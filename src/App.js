import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "10vh",
}));

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>xs=12 INSERT HEADER</Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>SIDEBAR</Item>
              <Item>SIDEBAR</Item>
              <Item>SIDEBAR</Item>
              <Item>SIDEBAR</Item>
            </Grid>

            <Grid item xs={6} md={8}>
              <Item>MAIN AREA</Item>
              <Item>MAIN AREA</Item>
              <Item>MAIN AREA</Item>
              <Item>MAIN AREA</Item>
            </Grid>

            <Grid item xs={6} md={2}>
              <Item>EMTPY OR INFO</Item>
              <Item>EMTPY OR INFO</Item>
              <Item>EMTPY OR INFO</Item>
              <Item>EMTPY OR INFO</Item>
            </Grid>

            <Grid item xs={12}>
              <Item>FOOTER</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => (
  <div
    style={{ height: "100px", width: "100%", backgroundColor: "#282c34" }}
  ></div>
);

export default App;
