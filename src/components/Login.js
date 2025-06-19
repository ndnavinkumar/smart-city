import './login.css';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="background">
      <div className="center">
        <div className="login-card">
          <div className="header">
            <h1>SMART CAMPUS<br />COMMAND CENTER</h1>
          </div>

          <h2 className="subheading">Sign In</h2>

          <form className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">LOGIN NOW</button>
          </form>

          <div className="footer">
            Powered by <strong>GROK DIGITAL</strong> © 2025. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
