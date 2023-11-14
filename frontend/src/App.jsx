import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Messages from "./components/Messages";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return <>{isLoading ? <Loader /> : <Messages />}</>;
};

export default App;
