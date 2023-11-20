import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Messenger from "./components/Messenger";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {};
  }, []);

  return <>{isLoading ? <Loader /> : <Messenger />}</>;
};

export default App;
