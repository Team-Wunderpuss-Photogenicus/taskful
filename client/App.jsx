import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ChoreContainer from './components/ChoreContainer';
import CoverPage from './components/CoverPage';
import PersonalList from './components/PersonalList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<ChoreContainer />} />
        <Route path="/personal" element={<PersonalList />} />
      </Routes>
    </>
  );
}

export default App;
