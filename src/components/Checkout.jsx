// src/components/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../styles/checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handlePurchase = async () => {
    if (!buyer.name || !buyer.email || !buyer.phone) {
      setFormError("Por favor, completa todos los campos.");
      return;
    }

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      createdAt: Timestamp.now(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu ID de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div className="checkout-container">
      <h2>Total a pagar: ${total}</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
            placeholder="Ingresa tu nombre"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            placeholder="Ingresa tu email"
          />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleInputChange}
            placeholder="Ingresa tu teléfono"
          />
        </label>
      </form>

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <button onClick={handlePurchase}>Confirmar compra</button>
    </div>
  );
};

export default Checkout;
