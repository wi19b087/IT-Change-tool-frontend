import logo from "./logo.svg";
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
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
