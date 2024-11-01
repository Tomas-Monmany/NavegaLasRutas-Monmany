
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useCart();

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
