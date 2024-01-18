// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect with us:</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:your@email.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
