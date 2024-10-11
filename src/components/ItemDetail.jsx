import React, { useState } from 'react';
import "../styles/styles.css";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        <label>Cantidad: </label>
        <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetail;