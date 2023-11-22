import MainCard from "./MainCard";

import { ThemeProvider } from "@emotion/react";
import { Box, Avatar, Typography, IconButton, Container } from "@mui/material";
import { MoreHoriz, PhoneRounded, VideoChat } from "@mui/icons-material";
import Theme from "../Theme";
import Formulaire from "./Formulaire";
import Messages from "./Messages";

const MsgHeader = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Avatar></Avatar>

        <Typography variant="inherit">Jane Doe</Typography>
        <Box>
          <IconButton>
            <VideoChat />
          </IconButton>{" "}
          <IconButton>
            <PhoneRounded />
          </IconButton>{" "}
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ my: 4.5, borderTop: 2, borderColor: "#DDD" }}></Box>
    </ThemeProvider>
  );
};

const RightSide = () => {
  return (
    <MainCard
      border={false}
      sx={{ height: "97vh", maxHeight: "97vh" }}>
      <MsgHeader />
      <Box sx={{ height: "58vh", maxHeight: "58vh", overflowY: "scroll" }}>
        <Messages />
      </Box>
      <Box sx={{ my: 0.5, borderTop: 2, borderColor: "#DDD" }}></Box>
      <Formulaire />
    </MainCard>
  );
};

export default RightSide;
