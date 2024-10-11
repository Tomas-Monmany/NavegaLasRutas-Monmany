import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

// Función simulada para obtener un producto específico
const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: 'Producto ' + id, description: 'Descripción del producto ' + id });
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId).then(setProduct);
  }, [productId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;