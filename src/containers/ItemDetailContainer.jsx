import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "../components/ItemDetail";
import "../styles/styles.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productRef = doc(db, "products", productId);
        const snapshot = await getDoc(productRef);
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
