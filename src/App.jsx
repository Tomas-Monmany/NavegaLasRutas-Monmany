import React from "react";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      {/* Mensaje de bienvenida mostrado */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;
