import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import "../styles/styles.css";

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Laptop', category: 'electronics' },
        { id: 2, name: 'Camisa', category: 'clothing' },
        { id: 3, name: 'Sofá', category: 'home' }
      ]);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtenemos el categoryId desde la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setProducts(data.filter(product => product.category === categoryId));
      } else {
        setProducts(data); // Si no hay categoría, mostrar todos los productos
      }
    });
  }, [categoryId]); // Agregamos categoryId como dependencia del useEffect

  return (
    <div>
      {categoryId && <h2>Productos de {categoryId}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;