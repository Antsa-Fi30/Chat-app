import { ThemeProvider } from "@emotion/react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import Theme from "../Theme";

const MessagesBox = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Avatar></Avatar>

        <Typography variant="inherit">UserName</Typography>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default MessagesBox;
