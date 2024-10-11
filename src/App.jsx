import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Ruta principal que muestra todas las categorías */}
        <Route path="/" element={<ItemListContainer />} />
        
        {/* Ruta que muestra los productos de una categoría específica */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        
        {/* Ruta que muestra el detalle de un producto */}
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
