import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Inscription.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.light"
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

export default function Inscription() {
  const Inscrire = useRef(null);
  const redirect = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Inscrire.current);
    const data = new FormData(Inscrire.current);
    const formsValue = {
      pseudo: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };
    localStorage.setItem(
      formsValue.pseudo,
      formsValue.email,
      formsValue.password
    );

    console.log(localStorage.getItem(formsValue.pseudo));

    redirect("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs">
        <Box
          className="inscription-box"
          sx={{
            marginTop: 8,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          {/* <img
            src={Logo}
            alt="Logo"
          /> */}
          <Typography
            component="h1"
            variant="h5">
            S'inscrire
          </Typography>
          <Box
            component="form"
            noValidate
            ref={Inscrire}
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid
              container
              spacing={2}>
              <Grid
                item
                xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="Nom d'utilisateur"
                  type="text"
                  id="username"
                  autoComplete="user-name"
                />
              </Grid>
              <Grid
                item
                xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid
                item
                xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid
                item
                xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirmer le mot de passe"
                  type="password"
                  id="password"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <NavLink to="/">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}>
                Enregistrer
              </Button>
            </NavLink>
            <Grid
              container
              justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/"
                  variant="body2">
                  Avez-vous déjà un compte? connectez-vous avec!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
