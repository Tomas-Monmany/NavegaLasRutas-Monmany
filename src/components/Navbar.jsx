import React from "react";
import CartWidget from "./CartWidget";
import "../styles/styles.css";
import logo from "../imagenes/Logo-pagina.png";

const NavBar = () => {
  return (
    <header>
      {/* Logo de la tienda */}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* Nombre de la tienda */}
      <h1>Suplementos Arnold</h1>
      <nav className="navbar">
        {/* Enlaces de navegación dentro de la página */}
        <ul className="navLinks">
          <li>
            <a href="#products" className="link">
              Productos
            </a>
          </li>
          <li>
            <a href="#cart" className="link">
              Carrito
            </a>
          </li>
          <li>
            <a href="#checkout" className="link">
              Checkout
            </a>
          </li>
        </ul>
      </nav>
      {/* Carrito de compras con notificación */}
      <CartWidget />
    </header>
  );
};

export default NavBar;
