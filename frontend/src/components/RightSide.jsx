/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import { ThemeProvider } from "@emotion/react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { MoreHoriz, PhoneRounded, VideoChat } from "@mui/icons-material";
import Theme from "../Theme";
import Formulaire from "./Formulaire";
import Messages from "./Messages";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SizedAvatar = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function BadgeAvatars() {
  return (
    <Stack
      direction="row"
      spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot">
        <Avatar
          alt="Jane Doe"
          src="/static/images/avatar/1.jpg"
        />
      </StyledBadge>
    </Stack>
  );
}

const MsgHeader = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot">
          <SizedAvatar>
            <Avatar
              alt="Jane Doe"
              src="/static/images/avatar/1.jpg"
            />
          </SizedAvatar>
        </StyledBadge>

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
      <Box sx={{ my: 2.7, borderTop: 2, borderColor: "#DDD" }}></Box>
    </ThemeProvider>
  );
};

const RightSide = () => {
  const [messages, setMessages] = useState("");

  const addMessages = (msg) => {
    const conversation = messages;
    conversation[`message-${Date.now()}`] = msg;
    setMessages(conversation);
  };

  useEffect(() => {
    console.log(messages);

    return () => {};
  }, [messages]);

  return (
    <MainCard
      border={false}
      sx={{ height: "98vh", maxHeight: "98vh" }}>
      <MsgHeader />
      <Box sx={{ height: "60vh", maxHeight: "60vh", overflowY: "scroll" }}>
        <Messages />
      </Box>
      <Box>
        <Formulaire addmsg={addMessages} />
      </Box>
    </MainCard>
  );
};

export default RightSide;
