import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const HeaderItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "5vh",
}));
const SidebarItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "120vh",
}));
const MainItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "180vh",
}));
const InfoItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "40vh",
}));
const FooterItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "10vh",
  maxHeight: "10vh",
}));

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <HeaderItem>xs=12 INSERT HEADER</HeaderItem>
            </Grid>

            <Grid item xs={6} md={2}>
              <SidebarItem>SIDEBAR</SidebarItem>
            </Grid>

            <Grid item xs={6} md={8}>
              <MainItem>MAIN AREA</MainItem>
            </Grid>

            <Grid item xs={6} md={2}>
              <InfoItem>EMTPY OR INFO</InfoItem>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => (
  <Grid item xs={12} zeroMinWidth style={{ overflow: "hidden" }}>
    <FooterItem>Footer</FooterItem>
  </Grid>
);

export default App;
