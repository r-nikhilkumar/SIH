import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import statements
import Login from './components/Login';
import Register from './components/Register';
import TextToSpeech from './components/TextToSpeech'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-form">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/register" />} /> {/* Default redirect to /register */}
            <Route path="/chat" element={<TextToSpeech />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
