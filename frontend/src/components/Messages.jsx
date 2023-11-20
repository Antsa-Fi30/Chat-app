import { useState } from "react";

const Messages = () => {
  const [isMine, setIsMine] = useState(false);

  const myMsg = "HEllo World";

  return <>{isMine ? <div>Gui</div> : <div>UIG</div>}</>;
};

export default Messages;
