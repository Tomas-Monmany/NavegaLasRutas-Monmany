import React from 'react';
import ItemCount from './ItemCount';
import "../styles/styles.css";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${product.name} al carrito`);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>

      {/* Componente ItemCount para manejar la cantidad */}
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;