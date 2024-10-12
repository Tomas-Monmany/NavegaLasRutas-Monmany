
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import "../styles/styles.css";

// Simulación de la lista de productos
const products=[
  { id: '1', name: 'WHEY PROTEIN TRUE MADE 2.05LBS - ENA SPORT', description: 'Whey Protein Isolate (WPI) es la forma más pura de proteína de suero que existe actualmente.', stock: 10, category: 'proteinas' },
  { id: '2', name: 'Creatina Monohidrato 300Grs - Mervick', description: 'ACTÚA INCREMENTANDO LOS DEPÓSITOS MUSCULARES DE FOSFOCREATINA, FAVORECIENDO LA PERFORMANCE Y RESISTENCIA MUSCULAR. ', stock: 20, category: 'creatinas' },
  { id: '3', name: 'AMINO GOLD 280Grs - GOLD NUTRITION', description: 'Puros aminoácidos micronizados de rápida asimilación, llega más rápido a toda tu fibra muscular. ', stock: 5, category: 'aminoacidos' }
]

// Función para obtener un producto por su ID
const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 1000); // Simulamos un retraso de 1 segundo
  });
};

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Capturar el productId desde la URL usando useParams
  const [product, setProduct] = useState(null); // Estado para el producto

  useEffect(() => {
    // Llamada asíncrona para obtener los detalles del producto
    getProductById(productId).then((productData) => {
      setProduct(productData); // Guardar el producto en el estado
    });
  }, [productId]); // Se ejecuta cuando productId cambia

  return (
    <div>
      {/* Si el producto se está cargando */}
      {!product ? (
        <p className='product-loading-message'>Cargando producto...</p>
      ) : (
        <ItemDetail product={product} /> // Pasar el producto al componente de detalle
      )}
    </div>
  );
};

export default ItemDetailContainer;