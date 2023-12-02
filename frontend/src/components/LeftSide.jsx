import {
  Box,
  ThemeProvider,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { BorderBottom, SearchRounded } from "@mui/icons-material";
import Theme from "../Theme";
import MainCard from "./MainCard";

import { useEffect } from "react";
import "./LeftSide.css";
import UserList from "./UserList";

const Search = () => {
  const handleSearch = (event) => {
    const search = event.target.value;
    console.log(search);
  };

  return (
    <OutlinedInput
      id="input-search-header"
      placeholder="Search"
      onChange={handleSearch}
      startAdornment={<InputAdornment position="start"></InputAdornment>}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="Search-btn"
            onClick={(e) => console.log(e)}>
            <SearchRounded size={24} />
          </IconButton>
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      inputProps={{ "aria-label": "weight" }}
      sx={{
        borderRadius: 7,
        backgroundColor: "",
        minWidth: "100%",
      }}
    />
  );
};

const LeftSide = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MainCard
        border={false}
        sx={{ height: "98vh", maxHeight: "98vh", overflowY: "scroll" }}>
        <Search />
        {/* Divider */}
        <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
        <span>User online</span>
        <Box
          sx={{
            height: "55vh",
            maxHeight: "55vh",
            overflowY: "scroll",
            my: 2.5,
            paddingY: 2.5,
            borderTop: 2,
            borderBottom: 2,
            borderColor: "#DDD",
          }}>
          <UserList />
        </Box>
        Ajouter des amis... Footer
      </MainCard>
    </ThemeProvider>
  );
};

export default LeftSide;
