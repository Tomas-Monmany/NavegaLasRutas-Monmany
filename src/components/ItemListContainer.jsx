import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <main>
      <div className="greetingMessage">
        <h2>{greeting}</h2> {/* Mensaje de bienvenida */}
      </div>

      {/* Botones para seleccionar todos los productos o solo los de una categoría */}
      <div className="categories">
        <button className="Todos">Todos</button>
        <button className="Proteinas">Proteínas</button>
        <button className="Creatinas">Creatinas</button>
      </div>
    </main>
  );
};

export default ItemListContainer;
