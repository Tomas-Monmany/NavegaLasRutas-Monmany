
import React from 'react';
import CartWidget from './CartWidget';
import '../styles/styles.css'; 

const NavBar = () => {
  return (
    <nav className='navbar'>
      {/* Logo de la tienda */}
      <div className='logo'>
        <img src="https://via.placeholder.com/50" alt='Logo de la tienda' />
        <h1>Tienda React</h1>
      </div>

      {/* Enlaces de navegación */}
      <ul className='navLinks'>
        <li><a href="#home" className="link">Inicio</a></li>
        <li><a href="#products" className="link">Productos</a></li>
        <li><a href="#contact" className="link">Contacto</a></li>

        {/* Enlaces de categorías */}
        <li><a href="#electronics" className="link">Electrónica</a></li>
        <li><a href="#clothing" className="link">Ropa</a></li>
        <li><a href="#home" className="link">Hogar</a></li>
      </ul>

      {/* Carrito de compras */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
