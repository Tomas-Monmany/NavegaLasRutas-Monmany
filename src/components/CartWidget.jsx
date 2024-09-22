
import React from 'react';
import '../styles/styles.css'; 

const CartWidget = () => {
  return (
    <div className='cart'>
      <span className='cart-icon'>🛒</span> {/*Icono carrito*/}
      <span className='cart-notification'>5</span> {/* burbuja de notificacion del carrito */}
    </div>
  );
};

export default CartWidget;
