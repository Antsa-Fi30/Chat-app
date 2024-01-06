import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/messenger" element={<App/>} /> 
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
