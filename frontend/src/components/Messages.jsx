/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Component } from "react";
import Layout from "./Layout";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="#">
        Stars
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#f44336", // Couleur primaire
    },
    secondary: {
      main: "#95a5a6", // Couleur secondaire
    },
    dark: {
      main: "#121212",
    },
    light: {
      main: "#FFFFF7 ",
    },
    // Autres paramètres de thème ici
  },
});

const Search = () => {
  const handleSearch = (event) => {
    const search = event.target.value;
    console.log(search);
  };

  return (
    <>
      <TextField />
    </>
  );
};

const DiscussBox = () => {
  return (
    <>
      <div>sadasdasd</div>
    </>
  );
};

export default function Messages() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout
        Component1={<Search />}
        Component2={<DiscussBox />}
      />
    </ThemeProvider>
  );
}
