// src/components/Checkout.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePurchase = async () => {
    const order = {
      buyer: {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        phone: "+123456789"
      },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total,
      createdAt: Timestamp.now()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Compra confirmada. ID de la orden: ${docRef.id}`);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h2>Total a pagar: ${total}</h2>
      <button onClick={handlePurchase}>Confirmar compra</button>
    </div>
  );
};

export default Checkout;
