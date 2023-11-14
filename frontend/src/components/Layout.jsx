import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

export default function Layout({ Component1, Component2 }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={1}
        columns={16}>
        <Grid xs={5}>{Component1}</Grid>
        <Grid xs={11}>{Component2}</Grid>
      </Grid>
    </Box>
  );
}
