// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Proveedor del contexto de carrito */}
      <BrowserRouter>
        {" "}
        {/* Proveedor de navegación */}
        <App /> {/* Componente principal */}
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
