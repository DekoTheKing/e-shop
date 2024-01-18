// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Cart from './Cart';
import Footer from './Footer';
import Login from './Login';
import './styles.css';

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state here

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setCart={setCart} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
