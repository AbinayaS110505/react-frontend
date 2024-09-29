import React from 'react';
import './Login.css'; // Ensure you have a Login.css for specific styles

const Login = () => {
  return (
    <div className="login">
      <h2>Login Page</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
