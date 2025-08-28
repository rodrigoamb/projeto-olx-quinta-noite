import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro.jsx";
import Anuncios from "./pages/Anuncios.jsx";
import Login from "./pages/Login.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/cadastro"} element={<Cadastro />} />
        <Route path={"/meus-anuncios"} element={<Anuncios />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
