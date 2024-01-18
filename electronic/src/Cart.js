// Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Cart({ cart, removeFromCartCallback }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever the cart changes
    const newTotalPrice = cart.reduce((total, product) => total + product.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const removeFromCart = (productId) => {
    if (removeFromCartCallback) {
      removeFromCartCallback(productId);
    }
  };

  return (
    <div className="cart">
      <h2>Cart Page</h2>
      <div className="cart-items">
        {cart.map(product => (
          <div key={product.id}>
            <p>
              {product.name} ${product.price.toFixed(2)}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </p>
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
