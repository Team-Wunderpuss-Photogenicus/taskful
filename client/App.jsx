import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Tasks from "./components/Tasks";

function App() {
    return (
        <Tasks />
    );
}

export default App;