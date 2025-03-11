import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/HomePageComponents/Navbar/Navbar';
import Hero from './components/HomePageComponents/Hero/Hero';
import Features from './components/HomePageComponents/Features/Features';
import Trending from './components/HomePageComponents/Trending/Trending';
import HomePage from './Pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <HomePage/>
    
  );
}

export default App;
