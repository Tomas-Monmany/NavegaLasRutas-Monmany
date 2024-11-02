import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/styles.css";
import logo from "../imagenes/Logo-pagina.png";

const NavBar = () => {
  return (
    <header>
      {/* Logo de la tienda */}
      <div className="logo">
        <img src={logo} alt="Logo de la pagina" />
      </div>
      {/* Nombre de la tienda */}
      <h1>Suplementos Arnold</h1>
      <nav className="navbar">
        {/* Enlaces de navegación dentro de la página */}
        <ul className="navLinks">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/proteinas">Proteinas</Link>
          </li>
          <li>
            <Link to="/category/creatinas">Creatinas</Link>
          </li>
          <li>
            <Link to="/category/aminoacidos">Aminoacidos</Link>
          </li>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default NavBar;
