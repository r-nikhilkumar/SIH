import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import statements
import Login from './components/Login';
import Register from './components/Register';
import TextToSpeech from './components/TextToSpeech'
import HomePage from './components/HomePage';
import Choose from './components/choose';
import Emergency from './components/emergency';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-form">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HomePage />} /> {/* Add a route for the home page */}
            <Route path="/consult" element={<TextToSpeech />} />
            <Route path="/selectservices" element={<Choose />} />
            <Route path="/emergency" element={<Emergency/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
