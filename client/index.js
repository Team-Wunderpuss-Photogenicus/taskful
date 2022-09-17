import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import SignUp from './components/SignUp.js';
import './stylesheet.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <App />

  </Router>
);
