import {
  Box,
  ThemeProvider,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { SearchRounded } from "@mui/icons-material";
import Theme from "../Theme";
import MainCard from "./MainCard";
import { useTheme } from "@mui/material/styles";

import { useEffect } from "react";
import "./LeftSide.css";
import UserList from "./UserList";

const Search = () => {
  useEffect(() => {}, []);

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
  const theme = useTheme();
  return (
    <ThemeProvider theme={Theme}>
      <MainCard
        border={false}
        elevation={16}
        boxShadow
        shadow={theme.shadows[16]}
        className={"cardLeft"}
        sx={{ borderRadius: 5, maxHeight: "98vh", overflowY: "scroll" }}>
        <Search />
        {/* Divider */}
        <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
        {/* <UserList /> */}
        <UserList />
        <Box sx={{ my: 2.5, borderTop: 2, borderColor: "#DDD" }}></Box>
        Ajouter des amis... Footer
      </MainCard>
    </ThemeProvider>
  );
};

export default LeftSide;
