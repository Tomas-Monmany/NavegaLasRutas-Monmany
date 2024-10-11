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
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setProducts(data.filter(product => product.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      {/* Solo muestra el título si hay una categoría seleccionada */}
      {categoryId && <h2>Productos de {categoryId}</h2>}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;