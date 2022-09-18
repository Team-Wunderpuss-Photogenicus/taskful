import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ChoreContainer from './components/ChoreContainer';
import CoverPage from './components/CoverPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoreContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cover" element={<CoverPage />} />
      </Routes>
    </>
  );
}

export default App;
