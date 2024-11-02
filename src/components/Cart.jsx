import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p className="cart-container">El carrito está vacío</p>;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Confirmar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
