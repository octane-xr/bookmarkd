import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Trending from './components/Trending/Trending';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="/book/:id" element={<h1>Detalles del Libro</h1>} /> 
        </Routes>

        <Features />
      </div>
    </Router>
  );
}

export default App;
