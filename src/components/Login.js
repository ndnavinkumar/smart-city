import "./login.css";
import React, { useState } from "react";
import Footer from "./footer.png";

const USERNAME = "admin";
const PASSWORD = "admin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    setLoginError("");

    if (!username.trim()) {
      formErrors.username = "Username is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (username === USERNAME && password === PASSWORD) {
        alert("Login successful!");
      } else {
        setLoginError("Invalid username or password");
      }
    }
  };

  return (
    <div className="background">
      <div className="center">
        <div className="header">
          <h1>
            SMART CAMPUS
            <br />
            COMMAND CENTER
          </h1>
        </div>
        <div className="green-line"></div>
        <div className="login-card">
          <h2 className="subheading">Sign In</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="input-label">username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}
            <label className="input-label">password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
            {loginError && <div className="error-message">{loginError}</div>}
            <button type="submit">LOGIN NOW</button>
          </form>
        </div>
      </div>
      <div className="footer-image">
        <img src={Footer} alt="footer" />
      </div>
    </div>
  );
};

export default Login;
