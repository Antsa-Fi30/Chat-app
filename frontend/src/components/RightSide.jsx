import MainCard from "./MainCard";

import { ThemeProvider } from "@emotion/react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { MoreHoriz, PhoneRounded, VideoChat } from "@mui/icons-material";
import Theme from "../Theme";
import Formulaire from "./Formulaire";

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
      <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
    </ThemeProvider>
  );
};

const RightSide = () => {
  return (
    <MainCard
      border={false}
      boxShadow>
      <MsgHeader />
      {/* Divider */}
      <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
      <Formulaire />
    </MainCard>
  );
};

export default RightSide;
