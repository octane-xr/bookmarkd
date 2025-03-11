import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../../components/HomePageComponents/Hero/Hero';
import Features from '../../components/HomePageComponents/Features/Features';
import Trending from '../../components/HomePageComponents/Trending/Trending';
import Navbar from '../../components/HomePageComponents/Navbar/Navbar'
import './HomePage.scss';

function HomePage() {
  return (
    <Router>
      <div className="HomePage">
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

export default HomePage;
