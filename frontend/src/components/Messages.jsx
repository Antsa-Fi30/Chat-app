import { useState } from "react";
import "./Messages.css";
import { Avatar } from "@mui/material";
const Messages = ({ text }) => {
  const [isMine, setIsMine] = useState(true);

  const myMsg = ` Hello World `;
  const otherMsg = "Hello World ! I'm an IA created with JS";

  return (
    <div className="dialog-box">
      {!isMine ? (
        <div className="other-message-container">
          <Avatar>sd</Avatar>
          <div className="other-message">{otherMsg}</div>
        </div>
      ) : (
        <div className="my-message-container">
          <div className="my-message">{myMsg}</div>
          <Avatar></Avatar>
        </div>
      )}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>{" "}
      <div className="other-message-container">
        <Avatar>sd</Avatar>
        <div className="other-message">Lorem ipsum dolor</div>
      </div>
    </div>
  );
};

export default Messages;
