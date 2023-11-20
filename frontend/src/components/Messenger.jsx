/* eslint-disable no-unused-vars */

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./Layout";
import Theme from "../Theme";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

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

export default function Messenger() {
  return (
    <ThemeProvider theme={Theme}>
      <Layout
        Component1={<LeftSide />}
        Component2={<RightSide />}
      />
    </ThemeProvider>
  );
}
