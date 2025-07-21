import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Menu } from './pages/Menu';
import { Descr } from './pages/Descr';
import { Category } from './pages/Category';
import { Food } from './pages/Food';

function App() {
  return (
    <div className="content">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Main /> } />  
          <Route path='/about' element={ <About /> } />
          <Route path='/events' element={ <Events /> } />
          <Route path='/menu' element={ <Menu /> } />
          <Route path="/menu/:id" element={ <Descr /> } />
          <Route path="/menu/:id/:category" element={ <Category /> } />
          <Route path="/menu/:id/:category/:food" element={ <Food /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
