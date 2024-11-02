import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/styles.css";

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      {totalItems > 0 && (
        <span className="cart-notification">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
