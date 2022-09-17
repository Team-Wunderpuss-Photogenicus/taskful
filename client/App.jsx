import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Register from './components/Register';
import ChoreContainer from './components/ChoreContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoreContainer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
