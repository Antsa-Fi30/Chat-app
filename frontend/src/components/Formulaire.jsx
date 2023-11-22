import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { SendRounded } from "@mui/icons-material";

import "./Formulaire.css";

const handleSend = () => {
  console.log("Messages envoyes");
};

const Formulaire = () => {
  return (
    <Box
      sx={{
        my: 2.5,
        display: "flex",
        alignItems: "center",
      }}>
      <form
        action=""
        className="form-input">
        <textarea
          className="text-area"
          name="Texting"
          id=""
          cols="98"
          rows="3"></textarea>
        <Button
          type="submit"
          sx={{ mx: 2 }}
          variant="contained"
          color="primary"
          endIcon={<SendRounded />}
          onSubmit={handleSend}>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Formulaire;
