import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="content">
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
