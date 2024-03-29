// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real application, you would perform authentication here
    // For now, let's just display a success message
    alert(`Successfully logged in as ${username}`);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleLogin}>
          Log In
        </button>

        <p>
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
