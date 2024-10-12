import React from 'react';
import ItemCount from './ItemCount';
import "../styles/styles.css";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidad/es de ${product.name} al carrito`);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2> {/* Muestra el nombre del producto */}
      <p>{product.description}</p> {/* Muestra la descripción del producto */}
      
      {/* Componente ItemCount para manejar la cantidad */}
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;