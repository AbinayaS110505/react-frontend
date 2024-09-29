import React, { useState } from 'react';
import './Home.css'; // Ensure you have a Home.css for specific styles

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpToggle = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="home">
      <h1>Alumini Association</h1>
      {/* <p>Welcome to Alumini. Your professional network starts here.</p> */}
      {/* <button onClick={handleSignUpToggle}>
        {showSignUp ? 'Cancel Sign Up' : 'Sign Up'}
      </button> */}

      {showSignUp && (
        <div className="sign-up-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <a href="/login">Go to Login</a></p>
        </div>
      )}
    </div>
  );
};

export default Home;
