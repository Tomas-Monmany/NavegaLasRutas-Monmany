// src/context/CartContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Inicializar el carrito desde Local Storage o con un array vacío
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  // Guardar el carrito en Local Storage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Función para vaciar el carrito
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
