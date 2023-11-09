import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Connexion from "./components/Connexion.jsx";
import Inscription from "./components/Inscription.jsx";
import NotFound from "./components/NotFound.jsx";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Connexion/>} />
      <Route path="/app" element={<App/>} />
      <Route path="/inscription" element={<Inscription/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
