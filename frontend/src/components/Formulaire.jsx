import { useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import { SendRounded } from "@mui/icons-material";

import "./Formulaire.css";

const Formulaire = ({ addmsg }) => {
  const input = useRef(null);
  const [message, setMessage] = useState("");

  const createMessage = () => {};

  const handleChange = () => {
    setMessage(input.current.value);
  };

  const handleSend = (event) => {
    event.preventDefault();
    console.log(input.current.value);
    input.current.value = "";
  };

  return (
    <Box
      sx={{
        my: 2.5,
        display: "flex",
        alignItems: "center",
      }}>
      <form
        action=""
        className="form-input"
        onSubmit={handleSend}>
        <textarea
          className="text-area"
          name="Texting"
          id=""
          cols="70"
          rows="3"
          value={message}
          ref={input}
          onChange={handleChange}></textarea>

        <Button
          type="submit"
          sx={{ mx: 2 }}
          variant="contained"
          color="primary"
          endIcon={<SendRounded />}>
          Send
        </Button>
        <Button
          variant="outlined"
          color="primary">
          Joindre fichier
        </Button>
        <Button
          variant="outlined"
          color="primary">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }} // Style pour cacher l'input file
          />
          Joindre image
        </Button>
      </form>
    </Box>
  );
};

export default Formulaire;
