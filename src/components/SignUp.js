import React from 'react';
import './SignUp.css'; // Ensure you have a SignUp.css for specific styles

const SignUp = () => {
  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Go to Login</a></p>
    </div>
  );
};

export default SignUp;
