import React from 'react';
import Hero from '../../components/HomePageComponents/Hero/Hero';
import Features from '../../components/HomePageComponents/Features/Features';
import Trending from '../../components/HomePageComponents/Trending/Trending';
import Navbar from '../../components/HomePageComponents/Navbar/Navbar';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Hero />
      <Trending />
      <Features />
      <h2>Popular reviews</h2>
    </div>
  );
}

export default HomePage;
