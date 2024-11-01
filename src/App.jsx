import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Ruta principal para mostrar todos los productos */}
        <Route path="/" element={<ItemListContainer />} />

        {/* Ruta dinámica para filtrar por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta para ver el detalle de un producto */}
        <Route path="/product/:productId" element={<ItemDetailContainer />} />

        {/* Ruta 404 para manejar errores de navegación */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default App;