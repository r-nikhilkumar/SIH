import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login clicked with email:', email, 'and password:', password);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="Biometric"
            placeholder="biometric"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Link to='/selectservices'>
            <button type="submit">Login</button>
          </Link>
        </form>
        
      </div>
      <p>Register here   <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
