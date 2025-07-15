import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Events } from './pages/Events';

function App() {
  return (
    <div className="content">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Main /> } />  
          <Route path='/about' element={ <About /> } />
          <Route path='/events' element={ <Events /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
