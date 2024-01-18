// Products.js
import React from 'react';
import './styles.css';

function Products({ setCart }) {
  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: 999.99, image: 'https://www.jbhifi.com.au/cdn/shop/products/639220-Product-0-I-638301469804214552.jpg?v=1698811959' },
    { id: 2, name: 'Laptop ThinkPad T15', price: 499.99, image: 'https://5.imimg.com/data5/AY/DP/MY-11673038/lenovo-laptop.png' },
    { id: 3, name: 'Tablet Huawei MatePad 11', price: 299.99, image: 'https://falabella.scene7.com/is/image/Falabella/126365505_1?wid=800&hei=800&qlt=70' },
    { id: 4, name: 'Samsung S23 Ultra', price: 999.99, image: 'https://images.samsung.com/au/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Burgundy_MO.jpg' },
    { id: 5, name: 'MacBook Pro M2', price: 1199.99, image: 'https://www.humac.dk/sites/default/files/product-images/2022-06/MacBook_Pro_13_in_Silver_PDP_Image_Position-1__WWEN_0.jpg' },
    { id: 6, name: 'iPad Pro 2021', price: 799.99, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-select-202212-12-9inch-space-gray-wifi_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670865952412' },
  
  ];

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
