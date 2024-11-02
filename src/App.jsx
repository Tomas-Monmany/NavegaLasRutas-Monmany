// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
