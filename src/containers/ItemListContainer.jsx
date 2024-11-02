import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import ItemList from "../components/ItemList";
import "../styles/styles.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "products");
        const productsQuery = categoryId
          ? query(productsRef, where("category", "==", categoryId))
          : productsRef;

        const snapshot = await getDocs(productsQuery);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading)
    return <p className="product-loading-message">Cargando productos...</p>;
  if (products.length === 0)
    return (
      <p className="product-loading-message">
        No hay productos en esta categoría.
      </p>
    );

  return <ItemList products={products} />;
};

export default ItemListContainer;
