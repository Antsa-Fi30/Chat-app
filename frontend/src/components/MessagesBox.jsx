import { ThemeProvider } from "@emotion/react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { MoreHoriz, PhoneRounded, VideoChat } from "@mui/icons-material";
import Theme from "../Theme";

const MsgHeader = () => {
  return (
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
  );
};

const MessagesBox = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MsgHeader />
      <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
    </ThemeProvider>
  );
};

export default MessagesBox;
