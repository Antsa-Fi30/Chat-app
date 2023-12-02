import { useState } from "react";
import "./Messages.css";
import { Avatar } from "@mui/material";

const Bubble = () => {
  const [isMine] = useState(true);

  const myMsg = ` Hello World `;
  const otherMsg = "Hello World ! I'm an IA created with JS";

  return (
    <>
      {isMine ? (
        <div className="my-message-container">
          <div className="my-message">{myMsg}</div>
          <Avatar></Avatar>
        </div>
      ) : (
        <div className="other-message-container">
          <Avatar>JD</Avatar>
          <div className="other-message">{otherMsg}</div>
        </div>
      )}
      <div className="other-message-container">
        <Avatar>JD</Avatar>
        <div className="other-message">{otherMsg}</div>
      </div>
    </>
  );
};

export default Bubble;
