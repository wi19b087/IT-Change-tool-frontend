import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { PageContext } from "./context";
import { PageContextProvider } from "./context";
// import useResizer from "./useResizer";
import ResponsiveDrawer from "./ResponsiveDrawer";
import SideNav from "./SideNav";
import UserContainer from "./UserContainer";
import HomeContainer from "./HomeContainer";

export default function App() {
  return (
    <PageContextProvider>
      <ResponsiveDrawer></ResponsiveDrawer>
    </PageContextProvider>
  );
}
