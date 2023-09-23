import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here
    console.log('Register clicked with email:', email, 'and password:', password);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="biometric"
          placeholder="biometric"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
