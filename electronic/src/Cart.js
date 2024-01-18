// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="cart">
      <h2>Cart Page</h2>
      <div className="cart-items">
        {cart.map(product => (
          <div key={product.id}>
            <p>{product.name} ${product.price.toFixed(2)}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <Link to="/login">
        <button>Buy</button>
      </Link>
    </div>
  );
}

export default Cart;
