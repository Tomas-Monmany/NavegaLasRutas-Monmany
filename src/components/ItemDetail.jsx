import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import "../styles/styles.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      {product.stock === 0 ? (
        <p>Producto sin stock</p>
      ) : (
        added ? (
          <p>Producto agregado al carrito</p>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        )
      )}
    </div>
  );
};

export default ItemDetail;