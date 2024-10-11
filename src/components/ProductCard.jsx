import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <Link to={`/product/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default ProductCard;