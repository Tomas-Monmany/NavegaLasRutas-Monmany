import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import "../styles/styles.css";

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "WHEY PROTEIN TRUE MADE 2.05LBS - ENA SPORT",
          category: "proteinas",
        },
        {
          id: 2,
          name: "Creatina Monohidrato 300Grs - Mervick",
          category: "creatinas",
        },
        {
          id: 3,
          name: "AMINO GOLD 280Grs - GOLD NUTRITION",
          category: "aminoacidos",
        },
      ]);
    }, 2000);
  });
};

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtener el categoryId desde la URL usando useParams
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setProducts(data.filter((product) => product.category === categoryId));
      } else {
        setProducts(data); // Si no hay categoría, mostrar todos los productos
      }
    });
  }, [categoryId]); // Agregar categoryId como dependencia del useEffect

  return (
    <div>
      {categoryId && (
        <h2 className="item-category-title">Productos de {categoryId}</h2>
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
