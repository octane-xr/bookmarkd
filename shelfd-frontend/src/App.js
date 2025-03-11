import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
   
    </div>
  );
}

export default App;