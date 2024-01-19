// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './styles.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated hook

  const handleSignIn = () => {
    // In a real application, you would perform authentication here
    // For now, let's just display a success message
    alert(`Successfully signed in with email: ${email}`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Sign In Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
