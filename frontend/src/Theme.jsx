import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#f44336", // Couleur primaire
    },
    secondary: {
      main: "#95a5a6", // Couleur secondaire
    },
    dark: {
      main: "#1e272e", //Black Pearl (Swedish Palette)
    },
    light: {
      main: "#FFFFF7 ",
    },
    // Autres paramètres de thème ici
  },
  shadow: {},
});

export default Theme;
